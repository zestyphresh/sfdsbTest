var MODELS_COUNTDOWN = (function($m) { 
        
    var _modpriv = $m._priv;
    
    $m.CountdownPromo = function(views){
        
        var _id = 'a0Mb0000005LPl6',
            _data = _modpriv.createDataSets(views)
        ;
        
        function fetch(callback) {
    
            AnalyticsViewProvider.getCountdownPromotion(
                
                function (result, event) {
                    
                    _data['original'] = result.sales;
                    _data['lastweek'] = _.where(result.sales, { 'week': '2014-31' })
    
                    callback(event.status);
                        
                }, { escape: true }
                    
            );
            
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
        
        return {fetch : fetch,
                getData : function(dataset) { return _data[dataset]; },
                groupByOwner : groupByOwner,
                isFetched : function() { return fetched; }
        };
        
    };
    
    return $m;
        
})(MODEL);