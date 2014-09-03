var DATA_REMOTING = {
    
    //Note - Make sure buffer is set to false unless you know that the combined
    //result of any that might be bufferred together will be less than 15mb.

    'epos' : function(parentAccount) {
        
        //parentAccount used in soql where clause to reuce size of result as it
        //was hitting the 15mb limit. Use multiple calls and join in the model
        //to create a full dataset.
        
        var deferred = Q.defer();

        AnalyticsDataProvider.getEpos(
                
            parentAccount,
                
            function (result, event) {

                if (!event.status) {
                        
                    deferred.reject(event);
                        
                } else {

                    deferred.resolve(result);
                        
                }

            }, { buffer: false, escape: true }
                    
        );
            
        return deferred.promise;

    },
    
    'headlineOpps' : function() {
        
        //This query should never hit any SOQL limits
        
        var deferred = Q.defer();

        AnalyticsDataProvider.getHeadlineOpportunities(

            function (result, event) {

                if (!event.status) {
                        
                    deferred.reject(event);
                        
                } else {

                    deferred.resolve(result);
                        
                }

            }, { buffer: false, escape: true }
                    
        );
            
        return deferred.promise;

    }

};