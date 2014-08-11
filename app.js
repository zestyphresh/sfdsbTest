(function () {
    
    //public vars
    config = {},
    models = {},
    views = {},
    router = new Router().init()
    gblModel = MODEL;
    $body = $j('body');
    $navbar = $j();
    
    config.userId = $j('#userId').text();
    config.userName = $j('#userName').text();

    Q.all([gblModel.getUserViewConfig(config.userId), gblModel.getDateInfo()]).then(function(result) {
            
            $navbar = $j(templates['navbar'](result[0].navbar));
            $navbar.appendTo($body);
            
            _.each(result[0].views.available, function(v) {
        
                var args = _.isUndefined(v.View_Args__c) ? false : JSON.parse(v.View_Args__c);
                
                views[v.name] = new VIEW[v.name](args);
                
                router.on(v.link, routerFunc(v.name));
                
            });
            
    });

    function routerFunc(name) {

        return function() {
            
            if (views[name]) {
                
                $j('.dashboard-view').hide();
                $j('#' + views[name].getUid()).show();
                
            } else {
            
                views[name].init(true);
            
            }

        };
        
    }

}());