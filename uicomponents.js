function createNavbar(data) {
    
    var navbar = {
        'user' : '',
        'categories' : [
        ]
    };

    var views = [];
        
    _.each(results, function(v) {
       views.push({'category' : v.View_Category__c, 'modelId' : v.Model_Id__c, 'link' : v.View_Link__c, 'name' : v.View_Name__c}) ;
    });
        
    navbar.user = userName;
    navbar.categories = _.cloneDeep(_.map(_.groupBy(views, 'category'), function(v, k) { return {'name' : k, 'views' : v}; }));

    return $j(tmplNavbar(navbar));
    
}