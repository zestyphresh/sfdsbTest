var MODELS_COUNTDOWN = (function($m) { 
        
    var _modpriv = $m._priv;
    
    $m.CountdownPromo = function(){
        
        var _modelId = 'a0Mb0000005LPl6',
            _uid = _.uniqueId(_modelId + '-'),
            _data = {'alltime' : [], 'lastweek' : []}
        ;
        
        function fetch() {
            
            var deferred = Q.defer();
    
            AnalyticsViewProvider.getCountdownPromotion(
                
                function (result, event) {
                    
                    if (!event.status) {
                        
                        deferred.reject(false);

                    } else {
                        
                        _data.alltime = result.sales;
                        _data.lastweek = _.where(result.sales, { 'week': '2014-31' });
                        
                        deferred.resolve(true);

                    }
                    
                    //callback(_loaded);
                        
                }, { buffer : false, escape: true }
                    
            );
            
            return deferred.promise;
            
        }
        
        function groupByOwner(dataset, target) {

            var result = _(_data[dataset])
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
                            'vsTargetPercentage' : r.grossValue / target
                    };
                    
                })
                .value();
            
            return result;
    
        }
        
        return {
            fetch : fetch,
            getData : function(dataset) { return _data[dataset]; },
            groupByOwner : groupByOwner,
            isLoaded : function() { return _loaded; }
        };
        
    };
    
    return $m;
        
})(MODEL);