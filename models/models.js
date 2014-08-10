var MODEL = (function() {
    
    //constructor
    var module = function () {};
    
    module._priv = {
        datesByIndex    : {},
        datesByDate     : {},
        getUniqueValues : function(data, key) {
            return _.chain(data).pluck(key).uniq().value();
        },
        createFilters   : function(views, defaults) {
            result = {};
            _.chain(views).each(function(v) { result[v] = {}; });
            return result;
        }
    };
    
    return module; 
    
})();var MODELS_COUNTDOWN = (function($m) { 
        
    var _modpriv = $m._priv;
    
    $m.CountdownPromo = function(){
        
        var _modelId = 'a0Mb0000005LPl6',
            _uid = _.uniqueId(_modelId + '-'),
            _data = {'alltime' : [], 'lastweek' : []}
        ;
        
        function fetch() {
            
            var deferred = Q.defer();
    
            AnalyticsViewProvider.getCountdownPromotion(
                
                function (result, event) {
                    
                    if (!event.status) {
                        
                        deferred.reject(false);

                    } else {
                        
                        _data.alltime = result.sales;
                        _data.lastweek = _.where(result.sales, { 'week': '2014-31' });
                        
                        deferred.resolve(true);

                    }
                    
                    //callback(_loaded);
                        
                }, { buffer : false, escape: true }
                    
            );
            
            return deferred.promise;
            
        }
        
        function groupByOwner(dataset, target) {
            
            var result = {};
            
            _.chain(_data[dataset]).groupBy('owner').each(function(v, k) {
                result[k] = {'owner' : k , 'grossValue' : 0, 'quantity' : 0};
                _.each(v, function(o) { 
                    result[k].owner = k;
                    result[k].grossValue += o.grossValue;
                    result[k].quantity += o.quantity;
                });
            });
            
            _.chain(result).pluck().each(function(r) {
                r.vsTarget = -target + r.grossValue;
                r.vsTargetPercentage = r.grossValue / target;
            });
            
            console.log(result);

            return result;
    
        }
        
        return {
            fetch : fetch,
            getData : function(dataset) { return _data[dataset]; },
            groupByOwner : groupByOwner,
            isLoaded : function() { return _loaded; }
        };
        
    };
    
    return $m;
        
})(MODEL);var MODEL_OPPORTUNITIES = (function($m) {
    
    var _modpriv = $m._priv;

    $m.HeadlineOpportunities = function(){
        
        var _modelId = 'a0Mb0000005LPl5',
            _uid = _.uniqueId(_modelId + '-'),
            _data = {'normal' : [], 'byweek' : []},
            _loaded = false
        ;

        var _filters = 
            [{'field' : 'account', 'title' : 'Account', 'values' : []},
             {'field' : 'accountSector', 'title' : 'Sector', 'values' : []},
             {'field' : 'owner', 'title' : 'Owner', 'values' : []},
             {'field' : 'productCategory', 'title' : 'Category', 'values' : []},
             {'field' : 'recordType', 'title' : 'Type', 'values' : []},
             {'field' : 'stage', 'title' : 'Stage', 'values' : []},
             {'field' : 'isBudgeted', 'title' : 'Budgeted?', 'values' : []},
             {'field' : 'isPromotion', 'title' : 'Promotion?', 'values' : []}
            ];
        
        function fetch(callback) {
            
            console.log('in fetch');
                
            AnalyticsViewProvider.getHeadlineOpportunityTimeline(
                
                function (result, event) {
                    
                    if (!event.status) {
                        
                        _loaded = false;
                        
                    } else {
    
                        //In place to filter while testing
                        var testData = result.opps.slice(0,20);
                        var testTransformedData = _dataTransformToWeeks(testData);
                        
                        _data.normal = testData;
                        _data.byweek = testTransformedData;
                        updateFilters();
                        
                        _loaded = true;
                        
                    }
                    
                    callback(_loaded);
                        
                }, { buffer : false, escape: true }
                    
            );
            
        }
        
        function updateFilters(){
            
            _.chain(_filters).each(function(f) { 
                f.values = _modpriv.getUniqueValues(_data.normal, f.field);
            });
            
        }
        
        return { 
            fetch : fetch,
            updateFilters : updateFilters,
            getData : function(dataset) { return _data[dataset]; },
            getFilters : function() { return _filters; },
            isLoaded : function() { return _loaded; }
        };
        
        //PRIVATE FUNCTIONS
        //TODO - Not adding records correctly by week plus need way to push week 53 to week 1
        function _dataTransformToWeeks(originalData) {
            
            var deliveryWeeks = 4,
                storeWeeks = 4,
                newData = [];
    
            _(originalData).each(function(d) {
                
                //console.log(d.closeDate);
                
                var index = _modpriv.datesByDate[d.closeDate].dateIndex;
                
                var headline = d.recordType == 'Headline' ? true : false;
    
                var thisWeek = $j.extend({}, d);
                    thisWeek.type = 'Live';
                    newData.push(thisWeek);
                
                if(d.recordType == 'Headline') {
                    
                    _(deliveryWeeks).times(function(i) {
                        
                        var delWeek = $j.extend({}, d);
                            delWeek.week = _modpriv.datesByIndex[index - (i*7)].fyYearWeek;
                            delWeek.month = _modpriv.datesByIndex[index - (i*7)].fyYearMonth;
                            delWeek.closeDate = _modpriv.datesByIndex[index - (i*7)].cyDate;
                            delWeek.weeklyValue = 0;
                            delWeek.type = 'Delivery';
                        newData.push(delWeek);
                
                    });
    
                    _(storeWeeks).times(function(i) {
                                
                        var storeWeek = $j.extend({}, d);
                            storeWeek.week = _modpriv.datesByIndex[index + (i*7)].fyYearWeek;
                            storeWeek.month = _modpriv.datesByIndex[index + (i*7)].fyYearMonth;
                            storeWeek.closeDate = _modpriv.datesByIndex[index + (i*7)].cyDate;
                            storeWeek.type = 'In Store';
                        newData.push(storeWeek);
                    
                    });
                
                }
                
                if (!d.isPromotion) {
                
                    var maxIndex = 2191; 
                    var add = headline ? storeWeeks * 7 : 0;
                    var start = index + add;
                    var remainingWeeks = Math.floor((maxIndex - start) / 7);
                    
                    //console.log(maxIndex+','+add+','+start+','+remainingWeeks);
                    
                    _(remainingWeeks).times(function(i) {
                    
                        var saleWeek = $j.extend({}, d);
                            saleWeek.week = _modpriv.datesByIndex[start + (i*7)].fyYearWeek;
                            saleWeek.month = _modpriv.datesByIndex[start + (i*7)].fyYearMonth;
                            saleWeek.closeDate = _modpriv.datesByIndex[start + (i*7)].cyDate;
                            saleWeek.type = headline ? 'Sales' : 'Loss';
                        newData.push(saleWeek);
                    
                    });
                
                }
                
            });
                
            return newData;
            
        }
    
    };
    
    return $m;
        
})(MODEL);var MODEL_ONLOAD = (function($m) {
    
    var _modpriv = $m._priv;
    
    //TODO - instead of either loading/not loaidng this module adjust the query to accept short/long formats. The short version
    //will just be a single date (todays). This format could also be used for any other 'Onload' modules.
    
    $m.Onload = function() {
        
        var id = 'a0Mb0000005LPl4'
        ;
    
        function fetch(callback) {

            AnalyticsViewProvider.getDateInfo(
                
                function (result, event) {
                    
                    _modpriv.datesByIndex = _.chain(result.dates).map(function(d) { return [d.dateIndex, d]; }).object().value();
                    _modpriv.datesByDate = _.chain(result.dates).map(function(d) { return [d.cyDate, d]; }).object().value();
    
                    callback(event.status);
                        
                }, { buffer : false, escape : true }
                    
            );
            
        }
            
        return {
            fetch : fetch
        };
        
    };

    return $m;
    
})(MODEL);