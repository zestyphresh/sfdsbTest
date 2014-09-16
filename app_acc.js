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

            //$navbar = $j(templates['navbar'](config.userName));
            //$navbar.appendTo($body);
 
            views['accountDashboard'] = new VIEW['accountDashboard']({});
            views['accountDashboard'].init(true);

    });

}());