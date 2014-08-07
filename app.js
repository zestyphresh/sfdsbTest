(function () {
    
    var config = {},
        models = {},
        views = {}
    ;
    
    config.userId = $j('#userId').text();
    config.userName = $j('#userName').text();
    
    var $body, $navbar;

    //var gblModel = MODEL,
    //    onload = new gblModel.Onload
//    ;

    getUserViewConfig(function() { console.log('success'); });  

    function getUserViewConfig(callback) {
    
        var remoteObject = new SObjectModel.userViews();
    
        remoteObject.retrieve({
            
            limit : 100,
            where : { User_Id__c : { eq : userId } }
            
            }, function(err, obj) {
                
                var result = {},
                    userViews = _.map(obj, '_props');
                
                //NAVBAR
                result.navbar = {'user' : '', 'categories' : []};
                
                result.navbar.user = config.userName;
                
                console.log(userViews);
                
                var abc = _.chain(userViews)
                        .map(function(v) { console.log(v); return {'category' : v.View_Category__c, 'modelId' : v.Model_Id__c, 'link' : v.View_Link__c, 'name' : v.View_Name__c}; })
                        .groupBy('category')
                        .map(function(v, k) { console.log(v); return {'name' : k, 'views' : v}; })
                        .value()
                ;
                
                console.log(abc);
        
                //_.each(userViews, function(v) { 
                 //  navbarViews.push({'category' : v.View_Category__c, 'modelId' : v.Model_Id__c, 'link' : v.View_Link__c, 'name' : v.View_Name__c}) ;
                //});
        
    
     //= _.cloneDeep(_.map(_.groupBy(views, 'category'), function(v, k) { return {'name' : k, 'views' : v}; }));
            
        
                //callback();
        });
        
    }
    
    function testR(err, result) {
        
        var dashboardConfig;
        
        $body = $j('body');
        $navbar = createNavbar(results);
       
        //$navbar.find('a').bind('click', false);
        //$navbar.appendTo($body);
        //$body.append('<div id="test"></div>');
        //$body.append('<div id="test2"></div>');
        
        
        //var availableModels = _.object(_.map(results, function(v) { return [v.Model_Javascript_Name, ]
        
        _.each(availableModels, function(v) {
            models[v] = new gblModel[v];
        });
        
        _.each(models, function(v) {
            v.fetch(function(success, id) {
                if (success) $navbar.find('#'+ id).unbind('click', false);
                
            });
        });

    }

    /*onload.fetch(function(success) {
        
        if (success) loadApp();

    });*/
    

        
    //router.init();
        


    //ROUTER
    /*var routes = {
        '/Home': home,
        '/OpportunityTimeline': oppTimeline,
        '/CountdownPromo': cntPromo
    };*/

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