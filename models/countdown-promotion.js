var MODELS_COUNTDOWN = (function($m) { 
        
    var _modpriv = $m._priv;
    
    $m.CountdownPromo = function(viewIds){
        
        var _id = 'a0Mb0000005LPl6',
            _viewIds = viewIds,
            _defaultDatasets = {'alltime' : [], 'lastweek' : []},
            _data = _modpriv.createDataSets(_viewIds, _defaultDatasets)
        ;
        
        function fetch(callback) {
    
            AnalyticsViewProvider.getCountdownPromotion(
                
                function (result, event) {
                    
                    _.each(_viewIds, function(v) {
                        _data[v].alltime = result.sales;
                        _data[v].lastweek = _.where(result.sales, { 'week': '2014-31' });
                    });
    
                    callback(event.status, _id);
                        
                }, { escape: true }
                    
            );
            
        }
        
        function groupByOwner(viewId, dataset, target) {
            
            var result = {};
            
            _.chain(_data[viewId][dataset]).groupBy('owner').each(function(v, k) {
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
                getData : function(viewId, dataset) { return _data[viewId][dataset]; },
                groupByOwner : groupByOwner,
                isFetched : function() { return fetched; }
        };
        
    };
    
    return $m;
        
})(MODEL);