(function () {
    
    var $body = $j('body'),
        userId = $j('#userId').text(),
        userName = $j('#userName').text(),
        gblModel = MODEL,
        onload = new gblModel.Onload
    ;
    
    console.log(userId);
    
    var userViews = new SObjectModel.userViews();
    userViews.retrieve({
        limit : 100,
        where : { User_Id__c : { eq : userId } }
    }, function(err, records) {console.log(records);});
    
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
        
    router.init();
        


    //ROUTER
    var routes = {
        '/Home': home,
        '/OpportunityTimeline': oppTimeline,
        '/CountdownPromo': cntPromo
    };

    var router = Router(routes);
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
        
        router.init();
        
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