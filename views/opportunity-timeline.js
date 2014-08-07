var VIEW_OPPORTUNITIES = (function($v) {

    $v.HeadlineOpportunityTimeline = function(model) {
    
        //Private vars
        var _id = 'a0Lb0000006xVBq',
            _model = model
        ;
        
        //Public vars
        var chtTimeline, chtSales, tblOpps;
        
        //Initialise handlebar templates
        var tmplView = Handlebars.compile(templates['headline-opportunities']);
        var tmplFilters = Handlebars.compile(templates['dropdown-filters']);
    
        //Render function, adds all dom elements and creates charts, tables and filters
        function render() { 
        
            $j('#test').append(tmplView({'id':_id}));
    
            chtTimeline = new CHART.OpportunityTimeline(_id + '-charts-opp-timeline', _model.getDataWeeks());
            chtSales = new CHART.OpportunitySales(_id + '-charts-opp-sales', _model.getDataWeeks());
            tblOpps = new TABLE.HeadlineOpportunities(_id + '-tables-opp-list', _model.getData());      
    
            renderFilters(_id + '-filters');

        }
        
        //Renders filters, separate to render() so it can be called to refresh filters
        function renderFilters(id) {
    
            $j('#' + id).empty().append(tmplFilters(model.getFilters())); 
    
        }
        
        return { 
            render : render,
            changeModel : function(model) { _.model = model; }
        };
        
    };
    
    return $v;

})(VIEW);