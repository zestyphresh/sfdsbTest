var MODEL_OPPORTUNITIES = (function($m) {
    
    var _modpriv = $m._priv;

    $m.HeadlineOpportunities = function(){
        
        var _modelId = 'a0Mb0000005LPl5',
            _uid = _.uniqueId(_modelId + '-'),
            _dataAll = [],
            _dataFiltered = [];

        var getData = {};

        var _filters = 
            [{'field' : 'account', 'title' : 'Account', 'values' : []},
             {'field' : 'accountSector', 'title' : 'Sector', 'values' : []},
             {'field' : 'owner', 'title' : 'Owner', 'values' : []},
             {'field' : 'productCategory', 'title' : 'Category', 'values' : []},
             {'field' : 'recordType', 'title' : 'Type', 'values' : []},
             {'field' : 'stageCategory', 'title' : 'Stage', 'values' : []},
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
                        
                        _dataAll = _(result.opps).each(function(v) {
                            v.mDate = moment(v.closeDate, 'YYYY-MM-DD');
                            v.mDatePrevious = moment(v.closeDatePrevious, 'YYY-MM-DD');
                        })
                        .value();

                        updateFilters();

                        deferred.resolve(true);
                        
                    }

                }, { escape: true }
                    
            );
            
            return deferred.promise;
            
        }
        
        function _convertThreatsToNegative(data) {

            var result = _([]).assign(data).each(function(v) {
                if (v.recordType === 'Threat') {
                    v.isoValue = -v.isoValue;
                    v.isoValuePrevious = -v.isoValuePrevious;
                    v.annualisedValue = -v.annualisedValue;
                    v.annualisedValuePrevious = -v.annualisedValuePrevious;
                    v.weeklyValue = -v.weeklyValue;
                    v.weeklyValuePrevious = -v.weeklyValuePrevious;
                }
            }).values();
            
            console.log(result);
            return result;
            
        }
        
        function filterData(filter) {
            _dataFiltered = _.where(_dataAll, filter);
        }
        
        function updateFilters(){
            
            _(_filters).each(function(f) { 
                f.values = _modpriv.getUniqueValues(_dataAll, f.field);
            });
            
            //console.log(_filters);
            
        }

        getData.filtered = function() { return _dataAll; };
        getData.timeline = function() { return _dataTransformToTimeline(_dataAll); };
        getData.monthlySales = function() { return _dataTransformToMonthlySales(_dataAll); };
        getData.oppsByStageCategory = function(stage) { return _.filter(_convertThreatsToNegative(_dataAll), {'stageCategory' : stage}); };
        
        return { 
            fetch : fetch,
            updateFilters : updateFilters,
            getData : getData,
            getFilters : function() { return _filters; }
        };
        
        //PRIVATE FUNCTIONS
        //_dataTransformToMonthlySales
        //_dataTransformToTimeline
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