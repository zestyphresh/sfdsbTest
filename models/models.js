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
            _data = []
        ;
        
        function fetch() {
            
            var deferred = Q.defer();
    
            AnalyticsViewProvider.getCountdownPromotion(
                
                function (result, event) {
                    
                    if (!event.status) {
                        deferred.reject(false);
                    } else {
                        _data = result.sales;
                        deferred.resolve(true);
                    }

                }, { escape: true }
                    
            );
            
            return deferred.promise;
            
        }
        
        function _dataFilter(filter) {
            
            var result;
            
            switch (filter) {
                case 'all':
                    result = _data;
                    break;
                case 'lastweek':
                    result = _.filter(_data, {'week':'2014-W32'});
                    break;
            } 
               
            console.log(result);    
            return result;
            
        }
        
        function getTotal(filter, target) {

            var result = _(_dataFilter(filter))
                .reduce(function(r, n) { 
                        
                    return {'grossValue' : r.grossValue + n.grossValue, 
                            'quantity' : r.quantity + n.quantity };
                                
                    }, {'grossValue':0, 'quantity':0}
                );
                
            result.vsTarget = -target + result.grossValue;
            result.vsTargetPercentage = result.grossValue / target;
            
            return result;
        }
        
        function groupByOwner(filter, target) {

            var result = _(_dataFilter(filter))
                .groupBy('owner')
                .map(function(v, k) {
                    
                    var sum = _.reduce(v, function(r, n) { 
                        
                        return {'grossValue' : r.grossValue + n.grossValue, 
                                'quantity' : r.quantity + n.quantity };
                                
                    }, {'grossValue':0, 'quantity':0});
                    
                    return {'owner': k, 
                            'grossValue' : sum.grossValue, 
                            'quantity' : sum.quantity,
                            'vsTarget' : -target + sum.grossValue,
                            'vsTargetPercentage' : sum.grossValue / target
                    };
                    
                })
                .value();
            
            return result;
    
        }
        
        function getTargetSeries(target) {
            return [{'owner':'Matt K', 'grossValue':target},
                    {'owner':'Phil L', 'grossValue':target},
                    {'owner':'Mark P', 'grossValue':target},
                    {'owner':'Tracy B', 'grossValue':target},
                    {'owner':'Steve G', 'grossValue':target},
                    {'owner':'Steve H', 'grossValue':target},
                    {'owner':'Norrie C', 'grossValue':target},
                    {'owner':'Brian M', 'grossValue':target},
                    {'owner':'Brian R', 'grossValue':target}]; 
        }
        
        return {
            fetch : fetch,
            getData : function(filter) { return _dataFilter(filter); },
            getTotal : getTotal,
            groupByOwner : groupByOwner,
            getTargetSeries : getTargetSeries
        };
        
    };
    
    return $m;
        
})(MODEL);var MODEL_GETDATEINFO = (function($m) {
    
    var _modpriv = $m._priv;
    
    //TODO - instead of either loading/not loaidng this module adjust the query to accept short/long formats. The short version
    //will just be a single date (todays). This format could also be used for any other 'Onload' modules.
    
    $m.getDateInfo = function() {
        
        var id = 'a0Mb0000005LPl4',
            deferred = Q.defer()
        ;
    
        AnalyticsViewProvider.getDateInfo(
            
            function (result, event) {
            
                if (!event.status) {
                    
                    deferred.reject(false);
                    
                } else {

                    _modpriv.datesByIndex = _.chain(result.dates).map(function(d) { return [d.dateIndex, d]; }).object().value();
                    _modpriv.datesByDate = _.chain(result.dates).map(function(d) { return [d.cyDate, d]; }).object().value();
                    
                    deferred.resolve(true);
                    
                }
            }, { escape: true }
                
        );
    
        return deferred.promise;
        
    };

    return $m;
    
})(MODEL);var MODEL_OPPORTUNITIES = (function($m) {
    
    var _modpriv = $m._priv;

    $m.HeadlineOpportunities = function(){
        
        var _modelId = 'a0Mb0000005LPl5',
            _uid = _.uniqueId(_modelId + '-'),
            _data = [];
            _dataByWeek = [];
            _dataTimeline = [];
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
            
            var deferred = Q.defer();

            AnalyticsViewProvider.getHeadlineOpportunityTimeline(
                
                function (result, event) {
                    
                    if (!event.status) {
                        
                        deferred.reject(false);
                        
                    } else {
                        
                        var endOfYear = new moment('2014-12-31', 'YYYY-MM-DD');

                        _data = _(result.opps.slice(0,20)).each(function(v) {
                            v.uName = v.name + ' (' + v.account + ' ' + _.uniqueId() + ')'; 
                            v.mDate = moment(v.closeDate, 'YYYY-MM-DD');
                        })
                        .filter(function(v) {

                            return v.mDate.isBefore(endOfYear);
                            
                        })
                        .value();
                        
                        _dataByWeek = _dataTransformToWeeks(_data);
                        _dataTimeline = _dataTransformToTimeline(_data);
                        
                        updateFilters();

                        deferred.resolve(true);
                        
                    }

                }, { escape: true }
                    
            );
            
            return deferred.promise;
            
        }
        
        function updateFilters(){
            
            _.chain(_filters).each(function(f) { 
                f.values = _modpriv.getUniqueValues(_data.normal, f.field);
            });
            
        }
        
        return { 
            fetch : fetch,
            updateFilters : updateFilters,
            getData : function() { return _data; },
            getDataByWeek : function() { return _dataByWeek; },
            getDataTimeline : function() { return _dataTimeline; },
            getFilters : function() { return _filters; }
        };
        
        //PRIVATE FUNCTIONS
        //TODO - Not adding records correctly by week plus need way to push week 53 to week 1
        function _dataTransformToWeeks(originalData) {
            
            var deliveryWeeks = 4,
                storeWeeks = 4,
                newData = [];
    
            _(originalData).each(function(d) {

                var index = _modpriv.datesByDate[d.closeDate].dateIndex;
                
                var headline = d.recordType === 'Headline' ? true : false;
    
                var thisWeek = $j.extend({}, d);
                    thisWeek.type = 'Live';
                    newData.push(thisWeek);
                
                if(d.recordType == 'Headline') {
                    
                    for (var i = 1; i <= deliveryWeeks; i++) {
                        
                        var newIndex = index - (i*7);
                        
                        while (_modpriv.datesByIndex[newIndex].cyWeekNum == 53) {newIndex--;}

                        var delWeek = $j.extend({}, d);
                            delWeek.week = _modpriv.datesByIndex[newIndex].fyYearWeek;
                            delWeek.month = _modpriv.datesByIndex[newIndex].fyYearMonth;
                            delWeek.closeDate = _modpriv.datesByIndex[newIndex].cyDate;
                            delWeek.weeklyValue = 0;
                            delWeek.type = 'Delivery';
                        newData.push(delWeek);
                
                    }
    
                    for (var i = 1; i <= storeWeeks; i++) {
                        
                        while (_modpriv.datesByIndex[newIndex].cyWeekNum == 53) {newIndex++;}
                        
                        var newIndex = index + (i*7);

                        var storeWeek = $j.extend({}, d);
                            storeWeek.week = _modpriv.datesByIndex[newIndex].fyYearWeek;
                            storeWeek.month = _modpriv.datesByIndex[newIndex].fyYearMonth;
                            storeWeek.closeDate = _modpriv.datesByIndex[newIndex].cyDate;
                            storeWeek.type = 'In Store';
                        newData.push(storeWeek);
                    
                    }
                
                }
                
                if (!d.isPromotion) {
                
                    var maxIndex = 1826; 
                    var add = headline ? storeWeeks * 7 : 0;
                    var start = index + add;
                    var remainingWeeks = Math.floor((maxIndex - start) / 7);

                    for (var i = 1; i <= remainingWeeks; i++) {
                        
                        var newIndex = start + (i*7);
                        
                        while (_modpriv.datesByIndex[newIndex].cyWeekNum == 53) {newIndex++;}
                    
                        var saleWeek = $j.extend({}, d);
                            saleWeek.week = _modpriv.datesByIndex[newIndex].fyYearWeek;
                            saleWeek.month = _modpriv.datesByIndex[newIndex].fyYearMonth;
                            saleWeek.closeDate = _modpriv.datesByIndex[newIndex].cyDate;
                            saleWeek.type = headline ? 'Sales' : 'Loss';
                        newData.push(saleWeek);
                    
                    }
                
                }
                
            });
                
            return newData;
            
        }
        
        function _dataTransformToTimeline(originalData) {
            
            var newData = [];
                
            _(originalData).each(function(d) {
                
                var deliveryDate = new moment(d.mDate).subtract('weeks', 4),
                    storeDate = new moment(d.mDate).add('weeks', 4),
                    maxDate = new moment('2014-12-31', 'YYYY-MM-DD');
                
                newData.push({'date':d.mDate.format('YYYY-MM-DD'), 'type': 'Live Date', 'opp' : d.uName});
                newData.push({'date':deliveryDate.format('YYYY-MM-DD'), 'type': 'Delivery Date', 'opp' : d.uName});
                newData.push({'date':storeDate.format('YYYY-MM-DD'), 'type': 'Store Date', 'opp' : d.uName});
                newData.push({'date':maxDate.format('YYYY-MM-DD'), 'type': 'End Date', 'opp' : d.uName});
                
            });
                
            return newData;
            
        }
    
    };
    
    return $m;
        
})(MODEL);var MODEL_USERVIEWCONFIG = (function($m) {
    
    var _modpriv = $m._priv;
    
    $m.getUserViewConfig = function(userId) {
        
        var id = 'a0Mb0000005LPl4',
            deferred = Q.defer(),
            remoteObject = new SObjectModel.userViews()
        ;
    
        remoteObject.retrieve({
            
            limit : 100,
            where : { User_Id__c : { eq : userId } }
            
            }, function(err, obj) {

                var result = { 'navbar' : {}, 'views' : {} },
                    userViews = _.map(obj, '_props');

                //NAVBAR
                var navbar = result.navbar;

                navbar['user'] = config.userName;
                navbar['categories'] = _.chain(userViews)
                        .map(function(v) { return {'category' : v.View_Category__c, 'link' : v.View_Link__c, 'name' : v.View_Name__c}; })
                        .groupBy('category')
                        .map(function(v, k) { return {'name' : k, 'views' : v}; })
                        .value();
                
                //ROUTES
                var views = result.views;
                
                views['available'] = _.chain(userViews)
                        .map(function(v) { return {'link' : v.View_Link__c, 'name' : v.View_Javascript_Name__c, 'args' : v.View_Args__c, 'home' : v.Home__c, 'preload' : v.Preload__c}; })
                        .value();

                deferred.resolve(result);
                
        });
        
        return deferred.promise;

    };

    return $m;
    
})(MODEL);