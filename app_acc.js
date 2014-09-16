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
    console.log(url);

    Q.all([gblModel.dates()]).then(function(result) {
        
        console.log('got dates');

            //$navbar = $j(templates['navbar'](config.userName));
            //$navbar.appendTo($body);
 
            views['accountDashboard'] = new VIEW['AccountDashboard']({});
            views['accountDashboard'].init(true);

    });

}());