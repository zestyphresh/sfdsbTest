(function () {
    
    config = {},
    models = {},
    views = {},
    router = new Router().init()
    $body = $j('body');
    _gblModel = MODEL;
    
    config.userId = $j('#userId').text();
    config.userName = $j('#userName').text();
    
    var $navbar;

    //TODO Add formula to view, checkbox for if it uses a model. If not then needs separate class so clicking isn't blocked
    getUserViewConfig(function(userViewConfig) { 
        
        console.log(userViewConfig);
        
        $navbar = $j(templates['navbar'](userViewConfig.navbar));
        
        //Disables all links in Navbar that have an associated data model
        $navbar.find('a.reqModel').bind('click', false);
        
        //Append Navbar
        $navbar.appendTo($body);
        
        //Load data model and enable links on success
        models['Onload'] = new _gblModel['Onload'];
        models['Onload'].fetch(function(success) { 
            
            _.each(userViewConfig.views.available, function(v) {
                
                views[v.name] = new VIEW[v.name](JSON.parse(v.View_Args__c));
                
                router.on(v.link, routerFunc(v.name));
                
            });
                
        });


        
    });
    
    function routerFunc(name) {

        return function() {
            
            views[name].init(true);

        }
        
    }
    
    function getUserViewConfig(callback) {
        
        console.log('in function');
    
        var remoteObject = new SObjectModel.userViews();
    
        remoteObject.retrieve({
            
            limit : 100,
            where : { User_Id__c : { eq : config.userId } }
            
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
                        
                console.log(result);

        });
        
    }

}());