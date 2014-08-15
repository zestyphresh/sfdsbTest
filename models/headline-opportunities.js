var MODEL_OPPORTUNITIES = (function($m) {
    
    var _modpriv = $m._priv;

    $m.HeadlineOpportunities = function(){
        
        var _modelId = 'a0Mb0000005LPl5',
            _uid = _.uniqueId(_modelId + '-'),
            _data = [],
            _dataTimeline = [],
            _dataTimeline2 = [],
            _dataMonthlySales = [];
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
                        
                        _data = _(result.opps).each(function(v) {
                            v.uName = v.name + ' (' + v.account + ' ' + _.uniqueId() + ')'; 
                            v.mDate = moment(v.closeDate, 'YYYY-MM-DD');
                        })
                        .value();
                        
                        _dataTimeline = _dataTransformToTimeline(_data);
                        _dataTimeline2 = _dataTransformToTimeline2(_data);
                        _dataMonthlySales = _dataTransformToMonthlySales(_data);
                        
                        updateFilters();

                        deferred.resolve(true);
                        
                    }

                }, { escape: true }
                    
            );
            
            return deferred.promise;
            
        }
        
        function updateFilters(){
            
            _.chain(_filters).each(function(f) { 
                f.values = _modpriv.getUniqueValues(_data, f.field);
            });
            
            //console.log(_filters);
            
        }
        
        function getDataTimeline() {
            
            return _dataTimeline2;
            
        }
        
        return { 
            fetch : fetch,
            updateFilters : updateFilters,
            getData : function() { return _data; },
            getDataTimeline : getDataTimeline,
            getDataByWeek : function() { return _dataByWeek; },
            getDataMonthlySales : function() { return _dataMonthlySales; },
            getFilters : function() { return _filters; }
        };
        
        //PRIVATE FUNCTIONS
        function _dataTransformToMonthlySales(originalData) {
            
            var maxDate = new moment('2015-12-31', 'YYYY-MM-DD');
            var newData = [];
    
            _(originalData).each(function(d) {

                var headline = d.recordType === 'Headline' ? true : false;

                var value = headline? d.isoValue : d.annualisedValue/12;

                newData.push({'date' : d.mDate.format('YYYY-MM'), 'value' : value, 'recordType' : d.recordType});
                
                d.mDate.add('months', 1);    
                    
                if (!d.isPromotion) {

                    while (d.mDate < maxDate) {

                        newData.push({'date' : d.mDate.format('YYYY-MM'), 'value' : d.annualisedValue/12, 'recordType' : d.recordType});
                        
                        d.mDate.add('months', 1);
                        
                    }
                    
                }
                    
            });
            
            //console.log('Function:_dataTransformToMonthlySales',newData);
                    
            return newData;
            
        }
        
        function _dataTransformToTimeline(originalData) {
            
            var newData = [];
                
            _(originalData).each(function(d) {
                
                var deliveryDate = new moment(d.mDate).subtract('weeks', 4),
                    storeDate = new moment(d.mDate).add('weeks', 4),
                    maxDate = new moment('2015-12-31', 'YYYY-MM-DD');
                    
                newData.push({'date':deliveryDate.format('YYYY-MM-DD'), 'type': 'Delivery Date', 'opp' : d.uName});
                newData.push({'date':storeDate.format('YYYY-MM-DD'), 'type': 'Store Date', 'opp' : d.uName});
                newData.push({'date':d.mDate.format('YYYY-MM-DD'), 'type': 'Delivery Date', 'opp' : d.uName});
                newData.push({'date':d.mDate.format('YYYY-MM-DD'), 'type': 'Store Date', 'opp' : d.uName});
                newData.push({'date':maxDate.format('YYYY-MM-DD'), 'type': 'End Date', 'opp' : d.uName});
                newData.push({'date':storeDate.format('YYYY-MM-DD'), 'type': 'End Date', 'opp' : d.uName});
                newData.push({'date':d.mDate.format('YYYY-MM-DD'), 'type': 'Live Date', 'opp' : d.uName});
                
            });
                
            //console.log('Function:_dataTransformToTimeline',newData);  
                
            return newData;
            
        }
        
        function _dataTransformToTimeline2(originalData) {
            
            var newData = [];
                
            _(originalData).each(function(d) {
                
                var headline = d.recordType === 'Headline' ? true : false;
                
                if (d.stageCategory === 'Confirmed'){
                
                    var deliveryDate = new moment(d.mDate).subtract('weeks', 4),
                        storeDate = new moment(d.mDate).add('weeks', 4),
                        maxDate = new moment('2015-12-31', 'YYYY-MM-DD'),
                        tClass = headline ? 'headline' : 'threat',
                        content = d.account + ' - ' + d.name + '</br>' + 
                                  'ISO - ' + numeral(d.isoValue).format('$0,0') + ', Annualised - ' + numeral(d.annualisedValue).format('$0,0');
                        var group;
                        
                        if (d.isoValue + d.annualisedValue < 50000) {
                            group = 'Low Value';
                        } else if (d.isoValue + d.annualisedValue < 250000) {
                            group = 'Medium Value';
                        } else {
                            group = 'High Value';
                        }
                        
                    newData.push({'group' : group, 'start' : deliveryDate.toDate(), 'end' : storeDate.toDate(), 'content' : content, 'className' : tClass});
                
                }
                
            });
            
            return _(newData).sortBy('start').reverse().value();
            
        }
    
    };
    
    return $m;
        
})(MODEL);