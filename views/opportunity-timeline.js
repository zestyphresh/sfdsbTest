if (!views) var views = {};

views['opportunity-timeline'] = (function() {
    
    var templateHeadlineOpportunities = Handlebars.compile($j("#Template-HeadlineOpportunities").html());
    
    var rendered = false;
    
    function isRendered() { return rendered; }

    function render() { 
    
        $j('#test').append(templateHeadlineOpportunities());
    
        var chtTimeline = new charts.OpportunityTimeline('chartContainer-OpportunityTimeline', headlineOpportunities.getDataWeeks());
        var chtSales = new charts.OpportunitySales('chartContainer-OpportunitySales', headlineOpportunities.getDataWeeks());
        var tblOpps = new tables.HeadlineOpportunities('table-OpportunityTable', headlineOpportunities.getData());      

        renderFilters('filterContainer-Opportunities');
        
        rendered = true;

    }
    
    function renderFilters(id) {

        $j('#' + id).empty().append(templateDropdownFilters(filterEntries)); 

    }

    return { 
        render : render,
        isRendered : isRendered 
    };

}());