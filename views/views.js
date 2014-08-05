var VIEW = (function() {
    
    var _priv = {};
    
    return { _priv : _priv }; 
    
})();var VIEW_COUNTDOWN = (function($v) {

    $v.CountdownPromo = function() {
        
        //Private vars
        var _id = '_0002';
        
        //Public vars
        var chtLeaderboard, tblLeaderboard, chtLastWeek, tblLastWeek, chtWeeklySales;
        
        //First call of render() sets to true, used to check if view has been initialised
        var rendered = false;
    
        //Initialise handlebar templates
        var template = Handlebars.compile(templates['countdown-promo']);
    
        //Render function, adds all dom elements and creates charts, tables and filters
        function render() { 
        
            $j('#test2').append(template({'id':_id}));
    
            chtLeaderboard = new charts.CountdownLeaderboard(_id + '-charts-promo-leaderboard', models['countdown-promo'].getData('original'), false);
            tblLeaderboard = new tables.CountdownLeaderboard(_id + '-tables-promo-leaderboard', models['countdown-promo'].groupByOwner('original', 20000)); 
            chtLastWeek = new charts.CountdownLeaderboard(_id + '-charts-promo-lastweek', models['countdown-promo'].getData('lastweek'), true);
            tblLastWeek = new tables.CountdownLeaderboard(_id + '-tables-promo-lastweek', models['countdown-promo'].groupByOwner('lastweek', 1360));  
            chtWeeklySales = new charts.CountdownWeeklySales(_id + '-charts-promo-weeklysales', models['countdown-promo'].getData('original'));
    
            rendered = true;
    
        }
    
        return { 
            render : render,
            isRendered : function() { return rendered; }
        };
        
    };
    
    return $v;

})(VIEW);var VIEW_OPPORTUNITIES = (function($v) {

    $v.CountdownPromo = function(model) {
    
        //Private vars
        var _id = '_0001';
        
        //Public vars
        var chtTimeline, chtSales, tblOpps;
        
        //First call of render() sets to true, used to check if view has been initialised
        var rendered = false;
    
        //Initialise handlebar templates
        var tmplView = Handlebars.compile(templates['headline-opportunities']);
        var tmplFilters = Handlebars.compile(templates['dropdown-filters']);
    
        //Render function, adds all dom elements and creates charts, tables and filters
        function render() { 
        
            $j('#test').append(tmplView({'id':_id}));
    
            chtTimeline = new CHART.OpportunityTimeline(_id + '-charts-opp-timeline', model.getDataWeeks());
            chtSales = new CHART.OpportunitySales(_id + '-charts-opp-sales', model.getDataWeeks());
            tblOpps = new TABLE.HeadlineOpportunities(_id + '-tables-opp-list', model.getData());      
    
            renderFilters(_id + '-filters');
            
            rendered = true;
    
        }
        
        //Renders filters, separate to render() so it can be called to refresh filters
        function renderFilters(id) {
    
            $j('#' + id).empty().append(tmplFilters(model.getFilters())); 
    
        }
        
        return { 
            render : render,
            isRendered : function() { return rendered; }
        };
        
    };
    
    return $v;

})(VIEW);