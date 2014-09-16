(function () {
    
    //public vars
    config = {};
    models = {};
    views = {};
    gblModel = MODEL;
    $body = $j('body');
    $navbar = $j();
    url = {};

    var currentUrl = new URI(window.location.href);
    url.params = currentUrl.search(true);

    Q.all([gblModel.dates()]).then(function(result) {

            //$navbar = $j(templates['navbar'](config.userName));
            //$navbar.appendTo($body);
 
            views['historicalSalesByParent'] = new VIEW['historicalSalesByParent']({});
            views['historicalSalesByParent'].init(true);

    });

}());