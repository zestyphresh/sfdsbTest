var VIEW_OPPORTUNITIES = (function($v) {

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