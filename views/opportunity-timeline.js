var VIEW_OPPORTUNITIES = (function($v) {

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
            $j('#' + _id).append(templates['heading-no-links']({'title':'Opportunity Timeline'}));
            $j('#' + _id).append(templates['headline-opportunities']({'id':_id}));
    
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