models['onload'] = (function() {
    
    function fetch(callback) {

        AnalyticsViewProvider.getDateInfo(
            
            function (result, event) {
                
                models['datesByIndex'] = _.chain(result.dates).map(function(d) { return [d.dateIndex, d]; }).object().value();
                models['datesByDate'] = _.chain(result.dates).map(function(d) { return [d.cyDate, d]; }).object().value();

                callback(event.status);
                    
            }, { escape: true }
                
        );
        
    }

    return { 
        fetch : fetch
    };
    
}());