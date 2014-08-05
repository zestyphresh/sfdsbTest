var MODEL_ONLOAD = (function($m) {
    
    var _modpriv = $m._priv;
    
    $m.Onload = function() {
    
        function fetch(callback) {

            AnalyticsViewProvider.getDateInfo(
                
                function (result, event) {
                    
                    _modpriv.datesByIndex = _.chain(result.dates).map(function(d) { return [d.dateIndex, d]; }).object().value();
                    _modpriv.datesByDate = _.chain(result.dates).map(function(d) { return [d.cyDate, d]; }).object().value();
    
                    callback(event.status);
                        
                }, { escape: true }
                    
            );
            
        }
            
        return {
            fetch : fetch
        };
        
    };

    return $m;
    
})(MODEL);