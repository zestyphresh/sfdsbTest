var headlineOpportunities = (function(){
    
    var data = [];
    var dataWeeks = [];
    var filterEntries = [];
    var filters = [{'field' : 'account', 'title' : 'Account'},
                   {'field' : 'accountSector', 'title' : 'Sector'},
                   {'field' : 'owner', 'title' : 'Owner'},
                   {'field' : 'productCategory', 'title' : 'Category'},
                   {'field' : 'recordType', 'title' : 'Type'},
                   {'field' : 'stage', 'title' : 'Stage'},
                   {'field' : 'isBudgeted', 'title' : 'Budgeted?'},
                   {'field' : 'isPromotion', 'title' : 'Promotion?'}
                  ];
    
    function fetch(callback) {
        
        console.log('in fetch');
            
        AnalyticsDataProvider.getHeadlineOpportunities(
            
            function (result, event) {
            
                var success = !event.status || !result.length > 0 ? false : true; 
                
                console.log(result);
                
                _(result).each(function(r) { r.closeDate = new Date(r.closeDate); });
                
                //In place to filter while testing
                
                var testData = result.slice(0,30);
                
                data.push(testData);
                dataWeeks.push(dataTransformToWeeks(testData));
                
                callback(success);
                    
            }, { escape: true }
                
        );
        
    }
    
    function getFilters(){
        
        _(filters).each(function(f) { 
            filterEntries.push({'name' : f.title, 
                                'field' : f.field, 
                                'values' : dimple.getUniqueValues(data[0], f.field)
            });
        });
    }
    
    function getData() {
        return data[0];
    }
    
    function getDataWeeks(){
        return dataWeeks[0];
    }
    
    function dataTransformToWeeks(data) {
        
        var deliveryWeeks = 4,
            storeWeeks = 4,
            newData = [];
        
        _(data).each(function(d) {
            
            var index = datesByDate[d.closeDate].Date_Index;
            var headline = d.recordType == 'Headline' ? true : false;
            
            var thisWeek = $j.extend({}, d);
                thisWeek.type = 'Live';
                newData.push(thisWeek);
            
            if(d.recordType == 'Headline') {
                
                _(deliveryWeeks).times(function(i) {
                    
                    var delWeek = $j.extend({}, d);
                        delWeek.week = datesByIndex[index - (i*7)].FY_Year_Week;
                        delWeek.month = datesByIndex[index - (i*7)].FY_Year_Month;
                        delWeek.closeDate = datesByIndex[index - (i*7)].Date;
                        delWeek.weeklyValue = 0;
                        delWeek.type = 'Delivery';
                    newData.push(delWeek);
            
                });

                _(storeWeeks).times(function(i) {
                            
                    var storeWeek = $j.extend({}, d);
                        storeWeek.week = datesByIndex[index + (i*7)].FY_Year_Week;
                        storeWeek.month = datesByIndex[index + (i*7)].FY_Year_Month;
                        delWeek.closeDate = datesByIndex[index + (i*7)].Date;
                        storeWeek.type = 'In Store';
                    newData.push(storeWeek);
                
                });
            
            }
            
            if (!d.isPromotion) {
            
                var maxIndex = 2191; 
                var add = headline ? storeWeeks * 7 : 0;
                var start = index + add + 7;
                var remainingWeeks = Math.floor((maxIndex - start) / 7);
                
                _(remainingWeeks).times(function(i) {
                
                    var saleWeek = $j.extend({}, d);
                        saleWeek.week = datesByIndex[i].FY_Year_Week;
                        saleWeek.month = datesByIndex[i].FY_Year_Month;
                        saleWeek.closeDate = datesByIndex[index + (i*7)].Date;
                        saleWeek.type = headline ? 'Sales' : 'Loss';
                    newData.push(saleWeek);
                    i += 7;
                
                });
            
            }
            
        });
            
        return newData;
    
    }
    
    return { fetch : fetch, 
             getData : getData,
             getDataWeeks : getDataWeeks
    };
        
}());