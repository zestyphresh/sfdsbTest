views['opportunity-timeline'] = (function() {

    function render() { 
    
        $j('#' + id).append(templateHeadlineOpportunities());
    
        var chtTimeline = new charts.OpportunityTimeline('chartContainer-OpportunityTimeline', headlineOpportunities.getDataWeeks());
        var chtSales = new charts.OpportunitySales('chartContainer-OpportunitySales', headlineOpportunities.getDataWeeks());
        var tblOpps = new tables.HeadlineOpportunities('table-OpportunityTable', headlineOpportunities.getData());      

        renderFilters('filterContainer-Opportunities');

    }
    
    function renderFilters(id) {

        $j('#' + id).empty().append(templateDropdownFilters(filterEntries)); 

    }

    return { render : render };

}());