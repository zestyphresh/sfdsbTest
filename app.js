(function () {
    
    var view = {};
    var body = $j('body');
    
    var templateNavbar = Handlebars.compile($j("#Template-Navbar").html());

    var contextNavbar = {
        'title' : 'Director Dashboard',
        'links' : [
            {'id' : 'Home', 'linkText' : 'Home'},
            {'id' : 'OpportunityTimeline', 'linkText' : 'Opportunity Timeline'}
        ]
    };
        
    body.append(templateNavbar(contextNavbar));

    //ROUTER
    var routes = {
        '/Home': home,
        '/OpportunityTimeline': opportunityTimeline
    };

    var router = Router(routes);

    router.init();
        
    function opportunityTimeline() {
        
        if (view.opportunityTimeline != undefined) {
           //switch to container rather than reloading 
        } else {
            headlineOpportunities.fetch(function(success) {
                
                if (success) {
                    view['opportunity-timeline'].render();
                } else {
                    console.log('data failure');
                }
                
            });
        }
    
    }
    
    function home() { console.log('home'); }  
    //END OF ROUTER

}());