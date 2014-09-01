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
        var chtSalesByCategory, chtSalesByOwner, tblOppSummary;
        
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
            
            var c = _(_models.opps.groups.totalByStageCategory.top(Infinity)).map(function(v) { return [v.key, v.value]; }).object().value();
            var p = _(_models.opps.groups.totalByStageCategory.top(Infinity)).map(function(v) { return [v.key, v.value]; }).object().value();
            
            var summaryTable = [];
            
            _.each(['Confirmed', 'Likely', 'Open', 'Unlikely', 'Lost'], function(d) {
                var result = {'stage' : d, 'headline' : c.Headline, 'headlineVs' : c.Headline - p.Headline, 'threat' : c.Threat, 'threatVs' : c.Threat - p.Threat}
                    result.total = result.headline - result.threat;
                    result.totalVs = result.headlineVs - result.threatVs;
                summaryTable.push(result);
            });
            
            console.log(summaryTable);
            
            tblOppSummary = new TABLE.HeadlineOpportunitySummary(_uid + '-tables-opp-summary', summaryTable);
            


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