//TODO
//While the code allows for multiple instances of the same view to be created
//it will not work correctly as an additional 'unique' ids will need to be
//appended to the standard id.
var VIEW = (function() {
        
    //constructor
    var module = function () {};
    
    module._priv = {};
    
    return module; 
    
})();var VIEW_COUNTDOWN = (function($v) {

    $v.CountdownPromo = function(model) {
        
        //Private vars
        var _id = 'a0Lb0000006xVBr';
            _model = model
        ;
        
        //Public vars
        var chtLeaderboard, tblLeaderboard, chtLastWeek, tblLastWeek, chtWeeklySales;

        //Render function, adds all dom elements and creates charts, tables and filters
        function render() { 
            
            $body.append(templates['container']({'id':_id}))
            $j(_id).append(templates['heading-no-links']({'title':'Countdown Promotion'}));
            $j(_id).append(templates['countdown-promo']({'id':_id}));
    
            chtLeaderboard = new CHART.CountdownLeaderboard(_id + '-charts-promo-leaderboard', _model.getData(_id, 'alltime'), false);
            tblLeaderboard = new TABLE.CountdownLeaderboard(_id + '-tables-promo-leaderboard', _model.groupByOwner(_id, 'alltime', 20000)); 
            chtLastWeek = new CHART.CountdownLeaderboard(_id + '-charts-promo-lastweek', _model.getData(_id, 'lastweek'), true);
            tblLastWeek = new TABLE.CountdownLeaderboard(_id + '-tables-promo-lastweek', _model.groupByOwner(_id, 'lastweek', 1360));  
            chtWeeklySales = new CHART.CountdownWeeklySales(_id + '-charts-promo-weeklysales', _model.getData(_id, 'alltime'));

        }
    
        return { 
            render : render
        };
        
    };
    
    return $v;

})(VIEW);var VIEW_OPPORTUNITIES = (function($v) {

    $v.HeadlineOpportunityTimeline = function(model) {
    
        //Private vars
        var _id = 'a0Lb0000006xVBq',
            _model = model
        ;
        
        //Public vars
        var chtTimeline, chtSales, tblOpps;

        //Render function, adds all dom elements and creates charts, tables and filters
        function render() { 
        
            $body.append(templates['container']({'id':_id}))
            $j(_id).append(templates['heading-no-links']({'title':'Opportunity Timeline'}));
            $j(_id).append(templates['headline-opportunities']({'id':_id}));
    
            chtTimeline = new CHART.OpportunityTimeline(_id + '-charts-opp-timeline', _model.getData(_id, 'byweek'));
            chtSales = new CHART.OpportunitySales(_id + '-charts-opp-sales', _model.getData(_id, 'byweek'));
            tblOpps = new TABLE.HeadlineOpportunities(_id + '-tables-opp-list', _model.getData(_id, 'normal'));      
    
            renderFilters(_id + '-filters');

        }
        
        //Renders filters, separate to render() so it can be called to refresh filters
        function renderFilters(id) {
    
            $j('#' + id).empty().append(templates['dropdown-filters'](model.getFilters(_id))); 
    
        }
        
        return { 
            render : render,
        };
        
    };
    
    return $v;

})(VIEW);