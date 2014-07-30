if (!views) { var views = {}; }

views['opportunity-timeline'] = (function() {

    console.log('view loaded');

    var chtTimeline, chtSales, tblOpps;

    function render() { 
    
        console.log('view render');

        $j('#' + id).append(templateHeadlineOpportunities());
    
        chtTimeline = new charts.OpportunityTimeline('chartContainer-OpportunityTimeline', headlineOpportunities.getDataWeeks());
        chtSales = new charts.OpportunitySales('chartContainer-OpportunitySales', headlineOpportunities.getDataWeeks());
        tblOpps = new tables.HeadlineOpportunities('table-OpportunityTable', headlineOpportunities.getData());      

        renderFilters('filterContainer-Opportunities');

    }
    
    function renderFilters(id) {

        $j('#' + id).empty().append(templateDropdownFilters(filterEntries)); 

    }

    return { render : render };

}());    


