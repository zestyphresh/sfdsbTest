if (!views) var views = {};

views['headline-opportunity-timeline'] = (function() {
    
    //First call of render() sets to true, used to check if view has been initialised
    var rendered = false;
    
    //Initialise handlebar templates
    var tmplView = Handlebars.compile($j("#Template-HeadlineOpportunities").html());
    var tmplFilters = Handlebars.compile($j("#Template-DropdownFilter").html());

    //Render function, adds all dom elements and creates charts, tables and filters
    function render() { 
    
        $j('#test').append(tmplView());
    
        var chtTimeline = new charts.OpportunityTimeline('chartContainer-OpportunityTimeline', headlineOpportunities.getDataWeeks());
        var chtSales = new charts.OpportunitySales('chartContainer-OpportunitySales', headlineOpportunities.getDataWeeks());
        var tblOpps = new tables.HeadlineOpportunities('table-OpportunityTable', headlineOpportunities.getData());      

        renderFilters('filterContainer-Opportunities');
        
        rendered = true;

    }
    
    //Renders filteres, separate to render() so it can be called to refresh filters
    function renderFilters(id) {

        $j('#' + id).empty().append(tmplFilters(headlineOpportunities.getFilters())); 

    }
    
    return { 
        render : render,
        isRendered : function() { return rendered; }
    };

}());