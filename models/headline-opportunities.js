var MODEL_OPPORTUNITIES = (function($m) {
    
    var _modpriv = $m._priv;

    $m.HeadlineOpportunities = function(){
    
        var fetched = false;
        var data, dataWeeks;
    
        var filters = [{'field' : 'account', 'title' : 'Account', 'values' : []},
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
    
                    //In place to filter while testing
                    var testData = result.opps.slice(0,20);
                    
                    data = testData;
                    dataWeeks = _dataTransformToWeeks(testData);
                    
                    updateFilters();
    
                    isFetched = true;
                    
                    callback(event.status);
                        
                }, { escape: true }
                    
            );
            
        }
        
        function updateFilters(){
            
            _(filters).each(function(f) { 
                f.values = getUniqueValues(data, f.field);
            });
            
        }
        
        return { fetch : fetch,
                 updateFilters : updateFilters,
                 getData : function() { return data; },
                 getDataWeeks : function() { return dataWeeks; },
                 getFilters : function() { return filters; },
                 isFetched : function() { return fetched; }
        };
        
        //PRIVATE FUNCTIONS
        function _dataTransformToWeeks(originalData) {
            
            var deliveryWeeks = 4,
                storeWeeks = 4,
                newData = [];
    
            _(originalData).each(function(d) {
                
                //console.log(d.closeDate);
                
                var index = models['datesByDate'][d.closeDate].dateIndex;
                
                var headline = d.recordType == 'Headline' ? true : false;
    
                var thisWeek = $j.extend({}, d);
                    thisWeek.type = 'Live';
                    newData.push(thisWeek);
                
                if(d.recordType == 'Headline') {
                    
                    _(deliveryWeeks).times(function(i) {
                        
                        var delWeek = $j.extend({}, d);
                            delWeek.week = models['datesByIndex'][index - (i*7)].fyYearWeek;
                            delWeek.month = models['datesByIndex'][index - (i*7)].fyYearMonth;
                            delWeek.closeDate = models['datesByIndex'][index - (i*7)].cyDate;
                            delWeek.weeklyValue = 0;
                            delWeek.type = 'Delivery';
                        newData.push(delWeek);
                
                    });
    
                    _(storeWeeks).times(function(i) {
                                
                        var storeWeek = $j.extend({}, d);
                            storeWeek.week = models['datesByIndex'][index + (i*7)].fyYearWeek;
                            storeWeek.month = models['datesByIndex'][index + (i*7)].fyYearMonth;
                            storeWeek.closeDate = models['datesByIndex'][index + (i*7)].cyDate;
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
                            saleWeek.week = models['datesByIndex'][start + (i*7)].fyYearWeek;
                            saleWeek.month = models['datesByIndex'][start + (i*7)].fyYearMonth;
                            saleWeek.closeDate = models['datesByIndex'][start + (i*7)].cyDate;
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