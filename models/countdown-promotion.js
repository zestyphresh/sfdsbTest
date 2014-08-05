models['countdown-promo'] = (function(){
    
    var data = {};
    
    function fetch(callback) {

        AnalyticsViewProvider.getCountdownPromotion(
            
            function (result, event) {
                
                data['original'] = result.sales;
                data['lastweek'] = _.where(result.sales, { 'week': '2014-31' })

                callback(event.status);
                    
            }, { escape: true }
                
        );
        
    }
    
    function groupByOwner(dataset, target) {
        
        var result = {};
        
        _.chain(data[dataset]).groupBy('owner').each(function(v, k) {
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
        
        console.log(result);
        
        return result;

    }
    
    return { fetch : fetch,
         getData : function(dataset) { return data[dataset]; },
         groupByOwner : groupByOwner,
         isFetched : function() { return fetched; }
    };
    
}());