(function () {
    
    var $body = $j('body');
    
    //ROUTER
    var routes = {
        '/Home': home,
        '/OpportunityTimeline': oppTimeline
    };

    var router = Router(routes);

    router.init();
    
    models['onLoad'].fetch(function(success) {
        
        console.log(templates['navbar']);
                
        if (success) {
            loadApp();
        } else {
            console.log('data failure');
        }
                
    });
    
    function loadApp() {

        //Navbar
        var tmplNavbar = Handlebars.compile($j(templates['navbar']).html());
    
        var contextNavbar = {
            'title' : 'Director Dashboard',
            'links' : [
                {'id' : 'Home', 'linkText' : 'Home'},
                {'id' : 'OpportunityTimeline', 'linkText' : 'Opportunity Timeline'}
            ]
        };
            
        $body.append(tmplNavbar(contextNavbar));
        
        $body.append('<div id="test"></div>');
        
    }

    function home() { console.log('home'); }  
    function oppTimeline() { renderView('headline-opportunity-timeline', 'headline-opportunities'); }
        

    function renderView(view, model) {
        
        if (views[view].isRendered()) {
           //switch to container rather than reloading 
        } else {
            models[model].fetch(function(success) {
                
                if (success) {
                    views[view].render();
                } else {
                    console.log('data failure');
                }
                
            });
        }
    }
    

    //END OF ROUTER

}());