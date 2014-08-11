var MODEL_USERVIEWCONFIG = (function($m) {
    
    var _modpriv = $m._priv;
    
    $m.getUserViewConfig = function(userId) {
        
        var id = 'a0Mb0000005LPl4',
            deferred = Q.defer(),
            remoteObject = new SObjectModel.userViews()
        ;
    
        remoteObject.retrieve({
            
            limit : 100,
            where : { User_Id__c : { eq : userId } }
            
            }, function(err, obj) {

                var result = { 'navbar' : {}, 'views' : {} },
                    userViews = _.map(obj, '_props');

                //NAVBAR
                var navbar = result.navbar;

                navbar['user'] = config.userName;
                navbar['categories'] = _.chain(userViews)
                        .map(function(v) { return {'category' : v.View_Category__c, 'link' : v.View_Link__c, 'name' : v.View_Name__c}; })
                        .groupBy('category')
                        .map(function(v, k) { return {'name' : k, 'views' : v}; })
                        .value();
                
                //ROUTES
                var views = result.views;
                
                views['available'] = _.chain(userViews)
                        .map(function(v) { return {'link' : v.View_Link__c, 'name' : v.View_Javascript_Name__c, 'args' : v.View_Args__c, 'home' : v.Home__c, 'preload' : v.Preload__c}; })
                        .value();

                deferred.resolve(result);
                
        });
        
        return deferred.promise;

    };

    return $m;
    
})(MODEL);