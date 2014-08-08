(function () {
    
    config = {},
    models = {},
    views = {},
    router = new Router().init()
    ;
    
    var _gblModel;
    
    config.userId = $j('#userId').text();
    config.userName = $j('#userName').text();
    
    var $body, $navbar;

    //TODO Add formula to view, checkbox for if it uses a model. If not then needs separate class so clicking isn't blocked
    getUserViewConfig(function(userViewConfig) { 
        
        console.log(userViewConfig);
        
        $body = $j('body');
        $navbar = $j(templates['navbar'](userViewConfig.navbar));
        
        //Disables all links in Navbar that have an associated data model
        $navbar.find('a.reqModel').bind('click', false);
        
        //Append Navbar
        $navbar.appendTo($body);
        
        _gblModel = MODEL;

        //Load data models and enable links on success
        models['Onload'] = new _gblModel['Onload'];
        models['Onload'].fetch(function(success) {
            _.each(userViewConfig.models.available, function(v, k) {
                models[v.name] = new _gblModel[v.name](v.viewIds);
                models[v.name].fetch(function(success, id) {
                    if (success) $navbar.find('.'+ id).unbind('click', false);
                });
            });
        });

        //Create routes
        _.each(userViewConfig.routes.available, function(v) {
            Router.once(v.link, routerFunc(v.name, models[v.model]));    
        });
        
        console.log(models, views, router);
        
    });
    
    function routerFunc(name, model) {
        
        return function() {
        
            views[name] = new VIEW[name](model);
            
            view.render();
            
        }
        
    }
    
    function getUserViewConfig(callback) {
    
        var remoteObject = new SObjectModel.userViews();
    
        remoteObject.retrieve({
            
            limit : 100,
            where : { User_Id__c : { eq : config.userId } }
            
            }, function(err, obj) {

                var result = { 'navbar' : {}, 'models' : {}, 'routes' : {} },
                    userViews = _.map(obj, '_props');
                
                //NAVBAR
                var navbar = result.navbar;

                navbar['user'] = config.userName;
                navbar['categories'] = _.chain(userViews)
                        .map(function(v) { return {'category' : v.View_Category__c, 'modelId' : v.Model_Id__c, 'link' : v.View_Link__c, 'name' : v.View_Name__c}; })
                        .groupBy('category')
                        .map(function(v, k) { return {'name' : k, 'views' : v}; })
                        .value();
                
                //MODELS        
                var models = result.models;
                
                models['available'] = _.chain(userViews)
                        .map(function(v) { return { 'name' : v.Model_Javascript_Name__c, 'viewId' : v.View_Id__c }; })
                        .groupBy('name')
                        .map(function(v,k) { console.log(v); console.log(k);return {'name' : k, 'viewIds' : _.pluck(v, 'viewId')}; })
                        .value();
                       
                //ROUTES
                var routes = result.routes;
                
                routes['available'] = _.chain(userViews)
                        .map(function(v) { return {'link' : v.View_Link__c, 'name' : v.View_Id__c, 'model' : v.Model_Javascript_Name__c}; })
                        .value();

                callback(result);
        });
        
    }
    

       
    /*onload.fetch(function(success) {
        
        if (success) loadApp();

    });*/
    

        
    //router.init();
        




    //var router = Router(routes);
    //END OF ROUTER - DELAY INITIIALISATION UNTIL LOADAPP()
    

    
    function loadApp() {


        
        //router.init();
        
    }

    function home() { console.log('home'); } 
    function cntPromo() { console.log('home'); } 

    /*function oppTimeline() {
        
        var rendered = false;
        var model, view;
        
        if (!rendered) {
            model = new gblModel.HeadlineOpportunities;
            model.fetch(function(success) {
                if (success) {
                    view = new VIEW.HeadlineOpportunityTimeline(model);
                    view.render();
                }
            });
        }
        
        rendered = true;
        
    }*/

}());