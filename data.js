var onLoad = (function() {
    
    var datesByIndex, datesByDate;

    function fetch(callback) {

        AnalyticsViewProvider.getDateInfo(
            
            function (result, event) {
                
                datesByIndex = _(result.dates).map(function(d) { return [d.dateIndex, d]; }).object();
                datesByDate = _.object(_.map(result.dates, function(d) { return [d.cyDate, d]; }));

                callback(event.status);
                    
            }, { escape: true }
                
        );
        
    }
    
    function getDatesByIndex() { return datesByIndex; }
    function getDatesByDate() { return datesByDate; }
    
    return { 
        fetch : fetch,
        getDatesByIndex : getDatesByIndex,
        getDatesByDate : getDatesByDate
    };
    
}());

//headlineOpportunities
var headlineOpportunities = (function(){
    
    var fetched = false;
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
            
        AnalyticsViewProvider.getHeadlineOpportunityTimeline(
            
            function (result, event) {

                //In place to filter while testing
                var testData = result.opps.slice(0,20);
                
                data.push(testData.opps);
                dataWeeks.push(dataTransformToWeeks(testData.opps));
                
                isFetched = true;
                
                callback(event.status);
                    
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
    
    function getData() { return data[0]; }
    function getDataWeeks() { return dataWeeks[0]; }
    function isFetched() { return fetched; }
    
    function _dataTransformToWeeks(originalData) {
        
        var deliveryWeeks = 4,
            storeWeeks = 4,
            newData = [];

        _(originalData).each(function(d) {
            
            console.log(d.closeDate);
            
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
                        storeWeek.closeDate = datesByIndex[index + (i*7)].Date;
                        storeWeek.type = 'In Store';
                    newData.push(storeWeek);
                
                });
            
            }
            
            if (!d.isPromotion) {
            
                var maxIndex = 2191; 
                var add = headline ? storeWeeks * 7 : 0;
                var start = index + add + 7;
                var remainingWeeks = Math.floor((maxIndex - start) / 7);
                
                console.log(maxIndex+','+add+','+start+','+remainingWeeks);
                
                _(remainingWeeks).times(function(i) {
                
                    var saleWeek = $j.extend({}, d);
                        saleWeek.week = datesByIndex[start + (i*7)].FY_Year_Week;
                        saleWeek.month = datesByIndex[start + (i*7)].FY_Year_Month;
                        saleWeek.closeDate = datesByIndex[start + (i*7)].Date;
                        saleWeek.type = headline ? 'Sales' : 'Loss';
                    newData.push(saleWeek);
                
                });
            
            }
            
        });
            
        return newData;
    
    }
    
    return { fetch : fetch, 
             getData : getData,
             getDataWeeks : getDataWeeks,
             isFetched : isFetched
    };
        
}());
//end of headlineOpportunities