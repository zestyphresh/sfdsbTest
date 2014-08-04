var models = {
    datesByIndex : {},
    datesByDate : {}
};

models['onLoad'] = (function() {
    
    function fetch(callback) {

        AnalyticsViewProvider.getDateInfo(
            
            function (result, event) {
                
                models['datesByIndex'] = _.chain(result.dates).map(function(d) { return [d.dateIndex, d]; }).object().value();
                models['datesByDate'] = _.chain(result.dates).map(function(d) { return [d.cyDate, d]; }).object().value();
                
                console.log(models['datesByIndex']);
                console.log(models['datesByDate']);

                callback(event.status);
                    
            }, { escape: true }
                
        );
        
    }

    return { 
        fetch : fetch
    };
    
}());

//headlineOpportunities
models['headline-opportunities'] = (function(){
    
    var fetched = false;
    var data = [];
    var dataWeeks = [];
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
            f.values = _dataFuncs.getUniqueValues(data, f.field);
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
            
            var index = models['datesByDate'][d.closeDate].Date_Index;
            var headline = d.recordType == 'Headline' ? true : false;
            
            console.log(d.closeDate +', '+ index);
            
            var thisWeek = $j.extend({}, d);
                thisWeek.type = 'Live';
                newData.push(thisWeek);
            
            if(d.recordType == 'Headline') {
                
                _(deliveryWeeks).times(function(i) {
                    
                    var delWeek = $j.extend({}, d);
                        delWeek.week = models['datesByIndex'][index - (i*7)].FY_Year_Week;
                        delWeek.month = models['datesByIndex'][index - (i*7)].FY_Year_Month;
                        delWeek.closeDate = models['datesByIndex'][index - (i*7)].Date;
                        delWeek.weeklyValue = 0;
                        delWeek.type = 'Delivery';
                    newData.push(delWeek);
            
                });

                _(storeWeeks).times(function(i) {
                            
                    var storeWeek = $j.extend({}, d);
                        storeWeek.week = models['datesByIndex'][index + (i*7)].FY_Year_Week;
                        storeWeek.month = models['datesByIndex'][index + (i*7)].FY_Year_Month;
                        storeWeek.closeDate = models['datesByIndex'][index + (i*7)].Date;
                        storeWeek.type = 'In Store';
                    newData.push(storeWeek);
                
                });
            
            }
            
            if (!d.isPromotion) {
            
                var maxIndex = 2191; 
                var add = headline ? storeWeeks * 7 : 0;
                var start = index + add + 7;
                var remainingWeeks = Math.floor((maxIndex - start) / 7);
                
                //console.log(maxIndex+','+add+','+start+','+remainingWeeks);
                
                _(remainingWeeks).times(function(i) {
                
                    var saleWeek = $j.extend({}, d);
                        saleWeek.week = models['datesByIndex'][start + (i*7)].FY_Year_Week;
                        saleWeek.month = models['datesByIndex'][start + (i*7)].FY_Year_Month;
                        saleWeek.closeDate = models['datesByIndex'][start + (i*7)].Date;
                        saleWeek.type = headline ? 'Sales' : 'Loss';
                    newData.push(saleWeek);
                
                });
            
            }
            
        });
            
        return newData;
    
    }
        
}());
//end of headlineOpportunities

//Utility functions, requires lodash
var _dataFuncs = {
    getUniqueValues : function(data, key) {
        return _.chain(data).pluck(key).uniq().value();
    }
};