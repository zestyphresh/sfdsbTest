views['headline-opportunity-timeline'] = (function() {
    
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

        chtTimeline = new charts.OpportunityTimeline(_id + '-charts-opp-timeline', models['headline-opportunities'].getDataWeeks());
        chtSales = new charts.OpportunitySales(_id + '-charts-opp-sales', models['headline-opportunities'].getDataWeeks());
        tblOpps = new tables.HeadlineOpportunities(_id + '-tables-opp-list', models['headline-opportunities'].getData());      

        renderFilters(_id + '-filters');
        
        rendered = true;

    }
    
    //Renders filters, separate to render() so it can be called to refresh filters
    function renderFilters(id) {

        $j('#' + id).empty().append(tmplFilters(models['headline-opportunities'].getFilters())); 

    }
    
    return { 
        render : render,
        isRendered : function() { return rendered; }
    };

}());