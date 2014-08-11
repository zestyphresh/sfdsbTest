var MODEL_OPPORTUNITIES = (function($m) {
    
    var _modpriv = $m._priv;

    $m.HeadlineOpportunities = function(){
        
        var _modelId = 'a0Mb0000005LPl5',
            _uid = _.uniqueId(_modelId + '-'),
            _data = {'normal' : [], 'byweek' : []}
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
    
                        //In place to filter while testing
                        var testData = result.opps.slice(0,20);
                        var testTransformedData = _dataTransformToWeeks(testData);
                        
                        _data.normal = testData;
                        _data.byweek = testTransformedData;
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
            getData : function(dataset) { return _data[dataset]; },
            getFilters : function() { return _filters; }
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
        
})(MODEL);