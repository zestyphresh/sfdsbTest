var MODELS_COUNTDOWN = (function($m) { 
        
    var _modpriv = $m._priv;
    
    $m.CountdownPromo = function(){
        
        var _modelId = 'a0Mb0000005LPl6',
            _uid = _.uniqueId(_modelId + '-'),
            _data = []
        ;
        
        function fetch() {
            
            var deferred = Q.defer();
    
            AnalyticsViewProvider.getCountdownPromotion(
                
                function (result, event) {
                    
                    if (!event.status) {
                        deferred.reject(false);
                    } else {
                        _data = result.sales;
                        deferred.resolve(true);
                    }

                }, { escape: true }
                    
            );
            
            return deferred.promise;
            
        }
        
        function _dataFilter(filter) {
            
            var result;
            
            switch (filter) {
                case 'all':
                    result = _data;
                    break;
                case 'lastweek':
                    result = _.filter(_data, {'week':'2014-W32'});
                    break;
            } 
                
            return result;
            
        }
        
        function getTotal(filter, target) {

            var result = _(_dataFilter(filter))
                .reduce(function(r, n) { 
                        
                    return {'grossValue' : r.grossValue + n.grossValue, 
                            'quantity' : r.quantity + n.quantity };
                                
                    }, {'grossValue':0, 'quantity':0}
                )
                .value();S
                
            result.vsTarget = -target + result.grossValue,
            result.vsTargetPercentage = result.grossValue / target
            
            return result;
        }
        
        function groupByOwner(filter, target) {

            var result = _(_dataFilter(filter))
                .groupBy('owner')
                .map(function(v, k) {
                    
                    var sum = _.reduce(v, function(r, n) { 
                        
                        return {'grossValue' : r.grossValue + n.grossValue, 
                                'quantity' : r.quantity + n.quantity };
                                
                    }, {'grossValue':0, 'quantity':0});
                    
                    return {'owner': k, 
                            'grossValue' : sum.grossValue, 
                            'quantity' : sum.quantity,
                            'vsTarget' : -target + sum.grossValue,
                            'vsTargetPercentage' : sum.grossValue / target
                    };
                    
                })
                .value();
            
            return result;
    
        }
        
        function getTargetSeries(target) {
            return [{'owner':'Matt K', 'grossValue':target},
                    {'owner':'Phil L', 'grossValue':target},
                    {'owner':'Mark P', 'grossValue':target},
                    {'owner':'Tracy B', 'grossValue':target},
                    {'owner':'Steve G', 'grossValue':target},
                    {'owner':'Steve H', 'grossValue':target},
                    {'owner':'Norrie C', 'grossValue':target},
                    {'owner':'Brian M', 'grossValue':target},
                    {'owner':'Brian R', 'grossValue':target}]; 
        }
        
        return {
            fetch : fetch,
            getData : function(filter) { return _dataFilter(filter); },
            getTotal : getTotal,
            groupByOwner : groupByOwner,
            getTargetSeries : getTargetSeries
        };
        
    };
    
    return $m;
        
})(MODEL);