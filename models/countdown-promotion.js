var MODELS_COUNTDOWN = (function($m) { 
        
    var _modpriv = $m._priv;
    
    $m.CountdownPromo = function(){
        
        var _modelId = 'a0Mb0000005LPl6',
            _uid = _.uniqueId(_modelId + '-'),
            _data = {'alltime' : [], 'lastweek' : []},
            _loaded = false
        ;
        
        function fetch() {
            
            var deferred = Q.defer();
    
            AnalyticsViewProvider.getCountdownPromotion(
                
                function (result, event) {
                    
                    if (!event.status) {
                        
                        deferred.reject(event);
                        
                        //_loaded = false;
                        
                    } else {
                        
                        _data.alltime = result.sales;
                        _data.lastweek = _.where(result.sales, { 'week': '2014-31' });
                        
                        deferred.resolve(true);
        
                        //_loaded = true;
                        
                    }
                    
                    //callback(_loaded);
                        
                }, { buffer : false, escape: true }
                    
            );
            
            return deferred.promise;
            
        }
        
        function groupByOwner(dataset, target) {
            
            var result = {};
            
            _.chain(_data[dataset]).groupBy('owner').each(function(v, k) {
                result[k] = {'owner' : k , 'grossValue' : 0, 'quantity' : 0};
                _.each(v, function(o) { 
                    result[k].owner = k;
                    result[k].grossValue += o.grossValue;
                    result[k].quantity += o.quantity;
                });
            });
            
            _.chain(result).pluck().each(function(r) {
                r.vsTarget = -r.target + r.grossValue;
                r.vsTargetPercentage = r.grossValue / r.target;
            });

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