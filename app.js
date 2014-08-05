(function () {
    
    var $body = $j('body');
    
    //ROUTER
    var routes = {
        '/Home': home,
        '/OpportunityTimeline': oppTimeline,
        '/CountdownPromo': cntPromo
    };

    var router = Router(routes);

    router.init();
    
    var gblModel = new MODEL();
    
    var onload = new gblModel.Onload();
    
    onload.fetch(function(success) {
        
        if (success) loadApp();

    });
    
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
        
    }

    function home() { console.log('home'); } 
    function cntPromo() { console.log('home'); } 

    function oppTimeline() {
        var rendered = false;
        var model, view;
        
        if (!rendered) {
            model = new gblModel.HeadlineOpportunities();
            model.fetch(function(success) {
                if (success) {
                    view = new VIEW.HeadlineOpportunities(model);
                    view.render();
                }
            });
        }
        
        rendered = true;
        
    }

}());