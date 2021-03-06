(function () {
    
    //public vars
    config = {};
    models = {};
    views = {};
    router = new Router().init();
    gblModel = MODEL;
    $body = $j('body');
    $navbar = $j();
    
    config.userId = $j('#userId').text();
    config.userName = $j('#userName').text();

    Q.all([gblModel.userViews(config.userId)]).then(function(result) {

            $navbar = $j(templates['navbar'](result[0].navbar));
            $navbar.appendTo($body);

            _.each(result[0].views.available, function(v) {
        
                var args = _.isUndefined(v.View_Args__c) ? false : JSON.parse(v.View_Args__c);

                router.on(v.link, routerFunc(v.name, args));
                
            });

    });

    function routerFunc(name, args) {

        return function() {

            $j('.dashboard-view').hide();
            
            if (views[name]) {
                
                $j('#' + views[name].getUid()).show();
                
            } else {
            
                views[name] = new VIEW[name](args);
                views[name].init(true);
            
            }

        };
        
    }

}());