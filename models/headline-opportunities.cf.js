var MODEL_OPPORTUNITIES = (function($m) {
    
    var _modpriv = $m._priv;

    $m.HeadlineOpportunitiesCf = function(){
        
        var _modelId = 'a0Mb0000005LPl5',
            _uid = _.uniqueId(_modelId + '-'),
            _data = crossfilter();
            
        var dims = {};
        

        var _filters = 
            [{'field' : 'accountSector', 'title' : 'Sector', 'values' : []},
             {'field' : 'owner', 'title' : 'Owner', 'values' : []},
             {'field' : 'productCategory', 'title' : 'Category', 'values' : []},
             {'field' : 'isBudgeted', 'title' : 'Budgeted?', 'values' : []}
            ];
        
        var currentFilters = {'accountSector' : 'all'}
        
        function fetch(callback) {
            
            var deferred = Q.defer();

            AnalyticsViewProvider.getHeadlineOpportunityTimeline(
                
                function (result, event) {
                    
                    if (!event.status) {
                        
                        deferred.reject(false);
                        
                    } else {
                        
                        var result = _(result.opps).each(function(v) {
                            v.mDate = moment(v.closeDate, 'YYYY-MM-DD');
                            v.mDatePrevious = moment(v.closeDatePrevious, 'YYY-MM-DD');
                        })
                        .value();
                        
                        _data.add(result);
                        
                        dims['stageCategory'] = _data.dimension('stageCategory');
                        dims['owner'] = _data.dimension('owner');
                        dims['productCategory'] = _data.dimension('productCategory');
                        
                        console.log(dims);

                        //updateFilters();

                        deferred.resolve(true);
                        
                    }

                }, { escape: true }
                    
            );
            
            return deferred.promise;
            
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
        
        function getData(format, filter, threatsNegative) {
            
            var result = _.size(filter) > 0 ? _.filter(_dataAll, filter) : _dataAll;
            
            if (threatsNegative) result = _convertThreatsToNegative(result);
            
            switch (format) {
                case 'list':
                    return result;
                    break;
                case 'monthlySales':
                    return _dataTransformToMonthlySales(result);
                    break;
                case 'timeline':
                    return _dataTransformToTimeline(result);
                    break;
            }
            
        }

        return { 
            fetch : fetch,
            getData : getData,
            updateFilters : updateFilters,
            getFilters : function() { return _filters; }
        };
        
        //PRIVATE FUNCTIONS
        //_convertThreatsToNegative
        //_dataTransformToMonthlySales
        //_dataTransformToTimeline
        
        function _convertThreatsToNegative(data) {

            return _.each(_.cloneDeep(data), function(v) {
                if (v.recordType === 'Threat') {
                    v.isoValue = -v.isoValue;
                    v.isoValuePrevious = -v.isoValuePrevious;
                    v.annualisedValue = -v.annualisedValue;
                    v.annualisedValuePrevious = -v.annualisedValuePrevious;
                    v.weeklyValue = -v.weeklyValue;
                    v.weeklyValuePrevious = -v.weeklyValuePrevious;
                    v.thisYearValue = -v.thisYearValue;
                    v.thisYearValuePrevious = -v.thisYearValuePrevious;
                }
            });
            
        }
        
    
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