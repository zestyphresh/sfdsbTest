(function () {
    
    var $body = $j('body'),
        userId = $j('#userId').text(),
        userName = $j('#userName').text()
    ;
    /*
    var $body = $j('body'),
        userId = $j('#userId').text(),
        userName = $j('#userName').text(),
        gblModel = MODEL,
        onload = new gblModel.Onload
    ;
    */
    
    console.log(userId);
    
    var navbar = {
        'user' : '',
        'categories' : [
        ]
    };
    
    var userViews = new SObjectModel.userViews();
    userViews.retrieve({
        limit : 100,
        where : { User_Id__c : { eq : userId } }
    }, testR);
    
    function testR(err, result) {
        var navCategory = { 'name' : '', 'views' : [] };
        var results = _.map(result, '_props');
        
        console.log(results);
        
        var categories = _.chain(results).pick(['View_Category__c', 'Model_Id__c', 'View_Link__c', 'View_Name__c']).groupBy('View_Category__c').value();
        _.each(categories, function(v,k) { navbar.categories.push({ 'name' : k,  'views' : v}); });

 

        //var categories = _.chain(results).pluck('View_Category__c').uniq().value();
        var views =  _.chain(results).pluck('View_Javascript_Name__c').uniq().value();
        var models =  _.chain(results).pluck('Model_Javascript_Name__c').uniq().value();
        
        console.log(categories);
        console.log(views);
        console.log(models);
        
        //_.each(categories, function(v) { navbar.categories.push({ 'name' : v,  'views' : [] }); });

        //_.each(results, function(v) { navbar.categories[v.View_Category__c]})
        console.log(navbar);
        
    }

    onload.fetch(function(success) {
        
        if (success) loadApp();

    });
    
    var tmplNavbar = Handlebars.compile(templates['navbar']);
    
    var contextNavbar = {
        'title' : 'Director Dashboard',
        'links' : [
            {'id' : 'Home', 'linkText' : 'Home'},
            {'id' : 'OpportunityTimeline', 'linkText' : 'Opportunity Timeline'},
            {'id' : 'CountdownPromo', 'linkText' : 'Countdown Promo'}
        ]
    };
    
    var navbar = {
        'user' : '',
        'category' : [
            {'name' : '',
             'views' : [
                ]
            }
        
        ]
    };
            
    $body.append(tmplNavbar(contextNavbar));
        
    $body.append('<div id="test"></div>');
    $body.append('<div id="test2"></div>');
        
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

        //Navbar
        var tmplNavbar = Handlebars.compile(templates['navbar']);
    
        var contextNavbar = {
            'title' : 'Director Dashboard',
            'links' : [
                {'id' : 'Home', 'linkText' : 'Home'},
                {'id' : 'OpportunityTimeline', 'linkText' : 'Opportunity Timeline'},
                {'id' : 'CountdownPromo', 'linkText' : 'Countdown Promo'}
            ]
        };
            
        $body.append(tmplNavbar(contextNavbar));
        
        $body.append('<div id="test"></div>');
        $body.append('<div id="test2"></div>');
        
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