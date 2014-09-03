var MODEL_HEADLINE_OPPS = (function($m) {
    
    var _modpriv = $m._priv;

    $m.HeadlineOpps = function(){
        
        //PRIVATE VARS
        var _data = crossfilter();
            
        //PUBLIC VARS   
        var dims = {}, groups = {};
        
        //PUBLIC FUNCTIONS
        function fetch(callback) {
            
            var deferred = Q.defer();
            
            Q.all([
                DATA_REMOTING.headlineOpps()
            ]).done(function(results) {

                _.each(results, function(v) {
                    
                    _onFetchDataChanges(v);
                    
                    _data.add(v);
                    
                });

                _createDims();
                
                _createGroups();
                
                deferred.resolve(true);
                
            });

            return deferred.promise;
            
        }
        
        //PRIVATE FUNCTIONS
        
        //Any data manipulation prior to inserting to crossfilter should be handled here
        function _onFetchDataChanges(data) {
            
            _(data).each(function(v) {
                v.closeDate = moment(v.closeDate, 'YYYY-MM-DD');
                v.closeDatePrevious = moment(v.closeDatePrevious, 'YYYY-MM-DD');
            });
            
        }
        
        //Create dimensions from crossfilter
        function _createDims() {
            
            dims.dummy = _data.dimension(function(d) { return 'all'; });
            dims.recordType = _data.dimension(function(d) { return d.recordType; });
            dims.sector = _data.dimension(function(d) { return d.accountSector; });
            dims.budgeted = _data.dimension(function(d) { return d.isBudgeted ? 'Budgeted' : 'Unbudgeted'; });
            dims.stageCategory = _data.dimension(function(d) { return d.stageCategory; });
            dims.stageCategoryPrevious = _data.dimension(function(d) { return d.stageCategoryPrevious; });
            dims.owner = _data.dimension(function(d) { return d.owner; });
            dims.productCategory = _data.dimension(function(d) { return d.productCategory; });
            dims.year = _data.dimension(function(d) { 
            
                var currentYear = moment().year();
                var oppYear = d.closeDate.year();
                
                if (currentYear > oppYear) {
                    return 'Last Year';
                } else if (currentYear == oppYear) {
                    return 'This Year';
                } else if (currentYear < oppYear) {
                    return 'Next Year';
                }
                            
            });
            
        }
        
        //Create groups from crossfilter dimensions
        function _createGroups() {
            
            groups.totalByStageCategory = dims.stageCategory
                .group()
                .reduce(_reduceAddByStageCategory, _reduceSubtractByStageCategory, _reduceInitialiseByStageCategory);
                        
            groups.totalByStageCategoryPrevious = dims.stageCategoryPrevious
                .group()
                .reduce(_reduceAddByStageCategory, _reduceSubtractByStageCategory, _reduceInitialiseByStageCategory);
                
            groups.owners = dims.owner.group();
            groups.sectors = dims.sector.group();
            
            
            //Reduce functions
            //TODO - Find way to organise better, will probably multiply quite quickly
            function _reduceAddByStageCategory(p, v) {
                p.count++;
                if (v.recordType === 'Headline') p.Headline += v.thisYearValue;
                if (v.recordType === 'Threat') p.Threat += v.thisYearValue;
                return p;
            }
            
            function _reduceSubtractByStageCategory(p, v) {
                p.count--;
                if (v.recordType === 'Headline') p.Headline -= v.thisYearValue;
                if (v.recordType === 'Threat') p.Threat -= v.thisYearValue;
                return p;
            }
            
            function _reduceInitialiseByStageCategory() {
                return {'count' : 0, 'Headline' : 0, 'Threat': 0 };
            }
            
        }
        
        return { 
            dims : dims,
            groups : groups,
            fetch : fetch,
            toTimeline : toTimeline
        };
        
        //CROSSFILTER REDUCE FUNCTIONS

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
        
        
        function toTimeline(originalData) {
            
            var newData = [];
                
            _(originalData).each(function(d) {
                
                var headline = d.recordType === 'Headline' ? true : false;
                
                if (d.stageCategory === 'Confirmed'){
                
                    var deliveryDate = d.closeDate.clone().subtract('weeks', 4),
                        storeDate = d.closeDate.clone().add('weeks', 4),
                        maxDate = new moment('2015-12-31', 'YYYY-MM-DD'),
                        tClass = headline ? 'headline' : 'threat',
                        content = d.account + ' - ' + d.name + '</br>' + 
                                  'ISO - ' + f.toGbp(d.isoValue) + ', Annualised - ' + f.toGbp(d.annualisedValue);
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