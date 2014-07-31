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
            
                var success = !event.status || !result.length > 0 ? true : false; 
                
                console.log(event);
                console.log(result);
                console.log(success);
                
                _(result).each(function(r) { r.closeDate = new Date(r.closeDate); });
                
                data.push(result);
                dataWeeks.push(dataTransformToWeeks(result));
                
                callback(success);
                    
            }, { escape: true }
                
        );
        
    }
    
    function getFilters(){
        _.each(filters, function(f) { 
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
        
        _.each(data, function(d) {
            
            var index = datesByWeek[d.week].Date_Index;
            var headline = d.recordType == 'Headline' ? true : false;
            
            var thisWeek = $j.extend({}, d);
                thisWeek.type = 'Live';
                newData.push(thisWeek);
            
            if(d.recordType == 'Headline') {
            
                for (var i=1; i<=deliveryWeeks; i++) {
            
                    var delWeek = $j.extend({}, d);
                        delWeek.week = datesByIndex[index - (i*7)].FY_Year_Week;
                        delWeek.month = datesByIndex[index - (i*7)].FY_Year_Month;
                        delWeek.weeklyValue = 0;
                        delWeek.type = 'Delivery';
                    newData.push(delWeek);
            
                }
                    
                for (var i=1; i<=storeWeeks; i++) {
                            
                    var storeWeek = $j.extend({}, d);
                        storeWeek.week = datesByIndex[index + (i*7)].FY_Year_Week;
                        storeWeek.month = datesByIndex[index + (i*7)].FY_Year_Month;
                        storeWeek.type = 'In Store';
                    newData.push(storeWeek);
                
                }
            
            }
            
            if (!d.isPromotion) {
            
                var maxIndex = 2191; 
                var startAdd = headline ? storeWeeks * 7 : 0;
                var start = index + startAdd + 7;
                var end = maxIndex;
                
                for (var i=start; i<=end; i = i+7) {
                    
                    
                    var saleWeek = $j.extend({}, d);
                        saleWeek.week = datesByIndex[i].FY_Year_Week;
                        saleWeek.month = datesByIndex[i].FY_Year_Month;
                        saleWeek.type = headline ? 'Sales' : 'Loss';
                    newData.push(saleWeek);
                
                }
            
            }
            
            if (d.recordType == 'Threat') {
            
                var maxIndex = 2191;                        
                var start = index + (storeWeeks * 7) + 7;
                var end = maxIndex;
                
                for (var i=start; i<=end; i = i+7) {
                    
                    var saleWeek = $j.extend({}, d);
                        saleWeek.week = datesByIndex[i].FY_Year_Week;
                        saleWeek.month = datesByIndex[i].FY_Year_Month;
                        saleWeek.type = 'Sales';
                    newData.push(saleWeek);
                
                }
            
            }
            
        });
            
        return newData;
    
    }
    
    return { fetch : fetch, 
             getData : getData,
             getDataWeeks : getDataWeeks
    };
        
}());