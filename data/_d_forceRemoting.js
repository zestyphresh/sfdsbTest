var DATA_REMOTING = {
    
    //Note - Make sure buffer is set to false unless you know that the combined
    //result of any that might be bufferred together will be less than 15mb.
    
    'accountsExtended' : function() {
        
        var deferred = Q.defer();

        AnalyticsDataProvider.getAccountsExtended(
            
            //The SOQL defaults to excluding 'dead' accounts. It should not hit
            //any limits but it does use all 32 arguments in the function
            //this can be overidden using maps/sets.

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

    'epos' : function(parentAccount) {
        
        //parentAccount used in soql where clause to reduce size of result as it
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

    },
    
    'historicalSalesByParent' : function(parent, id) {
        
        //This query should never hit any SOQL limits
        
        var deferred = Q.defer();

        AnalyticsDataProvider.getHeadlineOpportunities(
            
            parent, id, 

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