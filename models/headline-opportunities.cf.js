var MODEL_OPPORTUNITIES = (function($m) {
    
    var _modpriv = $m._priv;

    $m.HeadlineOpportunitiesCf = function(){
        
        var _modelId = 'a0Mb0000005LPl5',
            _uid = _.uniqueId(_modelId + '-'),
            _data = crossfilter();
            
        var dims = {}, groups = {};

        function fetch(callback) {
            
            var deferred = Q.defer();

            AnalyticsViewProvider.getHeadlineOpportunityTimeline(
                
                function (result, event) {
                    
                    if (!event.status) {
                        
                        deferred.reject(false);
                        
                    } else {
                        
                        //Add records to crossfilter and convert date strings to moment objects
                        _data.add(_(result.opps).each(function(v) {
                            v.closeDate = moment(v.closeDate, 'YYYY-MM-DD');
                            v.closeDatePrevious = moment(v.closeDatePrevious, 'YYYY-MM-DD');
                        })
                        .value());
                        
                        console.log(result.opps);
                        
                        //Create crossfilter dimensions
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

                        //Create crossfilter groups
                        groups.totalByStageCategory = dims.stageCategory
                            .group()
                            .reduce(
                                function(p, v) {
                                    p.count++;
                                    if (v.recordType === 'Headline') p.Headline += v.thisYearValue;
                                    if (v.recordType === 'Threat') p.Threat += v.thisYearValue;
                                    return p;
                                },
                                function(p, v) {
                                    p.count--;
                                    if (v.recordType === 'Headline') p.Headline -= v.thisYearValue;
                                    if (v.recordType === 'Threat') p.Threat -= v.thisYearValue;
                                    return p;
                                },
                                function() {
                                    return {'count' : 0, 'Headline' : 0, 'Threat': 0 };
                                }
                            );
                        
                        groups.totalByStageCategoryPrevious = dims.stageCategoryPrevious
                            .group(function(d) {
                                if (d === 'Confirmed') return 'Confirmed';
                                if (d === 'Likely') return 'Unconfirmed';
                                if (d === 'Open') return 'Unconfirmed';
                                if (d === 'Unlikely') return 'Unconfirmed';
                                if (d === 'Lost') return 'Lost';
                            })
                            .reduce(
                                function(p, v) {
                                    p.count++;
                                    if (v.recordType === 'Headline') p.Headline += v.thisYearValue;
                                    if (v.recordType === 'Threat') p.Threat += v.thisYearValue;
                                    return p;
                                },
                                function(p, v) {
                                    p.count--;
                                    if (v.recordType === 'Headline') p.Headline -= v.thisYearValue;
                                    if (v.recordType === 'Threat') p.Threat -= v.thisYearValue;
                                    return p;
                                },
                                function() {
                                    return { 'count' : 0, 'Headline' : 0, 'Threat': 0 };
                                }
                            );

                        deferred.resolve(true);
                        
                    }

                }, { escape: true }
                    
            );
            
            return deferred.promise;
            
        }
        
        return { 
            dims : dims,
            groups : groups,
            fetch : fetch
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