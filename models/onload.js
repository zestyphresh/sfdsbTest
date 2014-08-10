var MODEL_ONLOAD = (function($m) {
    
    var _modpriv = $m._priv;
    
    //TODO - instead of either loading/not loaidng this module adjust the query to accept short/long formats. The short version
    //will just be a single date (todays). This format could also be used for any other 'Onload' modules.
    
    $m.Onload = function() {
        
        var id = 'a0Mb0000005LPl4'
        ;
    
        function fetch(callback) {

            AnalyticsViewProvider.getDateInfo(
                
                function (result, event) {
                    
                    _modpriv.datesByIndex = _.chain(result.dates).map(function(d) { return [d.dateIndex, d]; }).object().value();
                    _modpriv.datesByDate = _.chain(result.dates).map(function(d) { return [d.cyDate, d]; }).object().value();
    
                    callback(event.status);
                        
                }, { buffer : false, escape : true }
                    
            );
            
        }
            
        return {
            fetch : fetch
        };
        
    };

    return $m;
    
})(MODEL);