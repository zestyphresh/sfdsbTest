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
            where : { User_Id__c : { eq : config.userId } }
            
            }, function(err, obj) {

                var result = {},
                    userViews = _.map(obj, '_props');
                
                //NAVBAR
                var navbar = result['navbar'];

                navbar['user'] = config.userName;
                navbar['categories'] = _.chain(userViews)
                        .map(function(v) { return {'category' : v.View_Category__c, 'modelId' : v.Model_Id__c, 'link' : v.View_Link__c, 'name' : v.View_Name__c}; })
                        .groupBy('category')
                        .map(function(v, k) { return {'name' : k, 'views' : v}; })
                        .value();
                
                //MODELS        
                var models = result['models'];
                
                models['available'] = _.chain(userViews)
                       .map(function(v) { return [v.Model_Id__c, v.Model_Javascript_Name]; })
                       .object()
                       .value();
                       
                console.log(result);
                

            
        
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
        
        
        //var availableModels = 
        
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