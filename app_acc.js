(function () {
    
    //public vars
    config = {};
    models = {};
    views = {};
    gblModel = MODEL;
    $body = $j('body');
    $navbar = $j();
    url = {};
    log = [];

    var currentUrl = new URI(window.location.href);
    url.params = currentUrl.search(true);

    Q.all([gblModel.dates()]).then(function(result) {
        
        log.push({'app' : 'in app'});

            //$navbar = $j(templates['navbar'](config.userName));
            //$navbar.appendTo($body);
 
            views['accountDashboard'] = new VIEW['accountDashboard']({});
            views['accountDashboard'].init(true);

    });
    
    console.log(log);

}());