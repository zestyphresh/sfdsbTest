var MODEL_DATES = (function($m) {
    
    var _modpriv = $m._priv;
    
    //TODO - instead of either loading/not loading this module adjust the query to accept short/long formats. The short version
    //will just be a single date (todays). This format could also be used for any other 'Onload' modules.
    
    $m.dates = function() {
        
        var deferred = Q.defer();
    
        AnalyticsDataProvider.getDates(
            
            function (result, event) {
            
                if (!event.status) {
                    
                    deferred.reject(false);
                    
                } else {

                    _modpriv.datesByIndex = _(result).map(function(d) { return [d.dateIndex, d]; }).object().value();
                    _modpriv.datesByDate = _(result).map(function(d) { return [d.cyDate, d]; }).object().value();
                    
                    deferred.resolve(true);
                    
                }
            }, { escape: true }
                
        );
    
        return deferred.promise;
        
    };

    return $m;
    
})(MODEL);