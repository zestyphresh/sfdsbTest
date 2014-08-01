(function () {
    
    var $body = $j('body');
    
    //ROUTER
    var routes = {
        '/Home': home,
        '/OpportunityTimeline': oppTimeline
    };

    var router = Router(routes);

    router.init();
    
    onLoad.fetch(function(success) {
                
        if (success) {
            loadApp();
        } else {
            console.log('data failure');
        }
                
    });
    
    function loadApp() {
        
        //Navbar
        var templateNavbar = Handlebars.compile($j("#Template-Navbar").html());
    
        var contextNavbar = {
            'title' : 'Director Dashboard',
            'links' : [
                {'id' : 'Home', 'linkText' : 'Home'},
                {'id' : 'OpportunityTimeline', 'linkText' : 'Opportunity Timeline'}
            ]
        };
            
        $body.append(templateNavbar(contextNavbar));
        
        $body.append('<div id="test"></div>');
        
    }

    function oppTimeline() {
        
        if (views['opportunity-timeline'].isRendered()) {
           //switch to container rather than reloading 
        } else {
            headlineOpportunities.fetch(function(success) {
                
                if (success) {
                    views['opportunity-timeline'].render();
                } else {
                    console.log('data failure');
                }
                
            });
        }
    
    }
    
    function home() { console.log('home'); }  
    //END OF ROUTER

}());