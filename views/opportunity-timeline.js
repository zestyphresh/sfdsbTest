var VIEW_OPPORTUNITIES = (function($v) {

    $v.HeadlineOpportunityTimeline = function(args) {

        //Private vars
        var _args = args,
            _viewId = 'a0Lb0000006xVBq',
            _uid = _.uniqueId(_viewId + '-'), 
            _models = {},
            _loaded = false
        ;

        //Public vars
        var tmlOpps, chtSales, tblOppsConfirmed, tblOppsLikely, tblOppsOpen, tblOppsUnlikely, tblOppsLost, chtOppsBuckets, dcchttest;
        var chtSalesByCategory, chtSalesByOwner;
        
        //Init models
        function init(renderAfter) {
            
            //_models['opps2'] = new gblModel.HeadlineOpportunities;
            _models['opps'] = new gblModel.HeadlineOpportunitiesCf;
            
            //_models.opps.fetch(), 

            Q.all([_models.opps.fetch()]).done(function() {
                
                _loaded = true;

                if (renderAfter) render();

            });

        }
            
        //Render function, adds all dom elements and creates charts, tables and filters
        function render() { 

            $body.append(templates['container']({'id':_uid}));
            $j('#' + _uid).append(templates['heading-no-links']({'title':'Opportunity Timeline'}));
            $j('#' + _uid).append(templates['headline-opportunities']({'id':_uid}));
            
            var summaryDataCurrent = _(_models.opps.groups.totalByStageCategory.top(Infinity)).map(function(v) { return [v.key, v.value]; }).object().value();
            var summaryDataPrevious = _(_models.opps.groups.totalByStageCategory.top(Infinity)).map(function(v) { return [v.key, v.value]; }).object().value();
            
            $j('#' + _uid + '-opp-summary-confirmed-headline').html(f.gbpComparison(summaryDataCurrent.Confirmed.Headline, summaryDataPrevious.Confirmed.Headline));
            $j('#' + _uid + '-opp-summary-likely-headline').html(f.gbpComparison(summaryDataCurrent.Likely.Headline, summaryDataPrevious.Likely.Headline));
            $j('#' + _uid + '-opp-summary-open-headline').html(f.gbpComparison(summaryDataCurrent.Open.Headline, summaryDataPrevious.Open.Headline));
            $j('#' + _uid + '-opp-summary-unlikely-headline').html(f.gbpComparison(summaryDataCurrent.Unlikely.Headline, summaryDataPrevious.Unlikely.Headline));
            $j('#' + _uid + '-opp-summary-lost-headline').html(f.gbpComparison(summaryDataCurrent.Lost.Headline, summaryDataPrevious.Lost.Headline));
            $j('#' + _uid + '-opp-summary-confirmed-threat').html(f.gbpComparison(summaryDataCurrent.Confirmed.Threat, summaryDataPrevious.Confirmed.Threat));
            $j('#' + _uid + '-opp-summary-likely-threat').html(f.gbpComparison(summaryDataCurrent.Likely.Threat, summaryDataPrevious.Likely.Threat));
            $j('#' + _uid + '-opp-summary-open-threat').html(f.gbpComparison(summaryDataCurrent.Open.Threat, summaryDataPrevious.Open.Threat));
            $j('#' + _uid + '-opp-summary-unlikely-threat').html(f.gbpComparison(summaryDataCurrent.Unlikely.Threat, summaryDataPrevious.Unlikely.Threat));
            $j('#' + _uid + '-opp-summary-lost-threat').html(f.gbpComparison(summaryDataCurrent.Lost.Threat, summaryDataPrevious.Lost.Threat));

            var tableData = _(_models.opps.dims.dummy.top(Infinity)).groupBy(function(v) { return v.stageCategory; }).value();

            tblOppsConfirmed = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-confirmed', tableData.Confirmed);
            tblOppsLikely = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-likely', tableData.Likely);     
            tblOppsOpen = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-open', tableData.Open);     
            tblOppsUnlikely = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-unlikely', tableData.Unlikely);     
            tblOppsLost = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-lost', tableData.Lost);
            //tmlOpps = new TIMELINE.HeadlineOpportunities(_uid + '-charts-opp-timeline',_models.opps.getData2('timeline', {'stageCategory' : 'Confirmed'}, false));
            //chtSales = new CHART.OpportunitySales(_uid + '-charts-opp-sales', _models.opps.getData2('monthlySales', {'stageCategory' : 'Confirmed'}, false));

            renderFilters(_uid + '-filters');

        }
        
        //Renders filters, separate to render() so it can be called to refresh filters
        function renderFilters(id) {
    
            //$j('#' + id).empty().append(templates['dropdown-filters'](_models.opps.getFilters())); 
    
        }
        
        return { 
            init : init,
            isLoaded : function() { return _loaded; },
            getUid : function() { return _uid; },
            render : render
        };
        
    };
    
    return $v;

})(VIEW);