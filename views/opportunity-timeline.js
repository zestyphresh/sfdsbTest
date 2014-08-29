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
            
                    "    <div id='{{id}}-opp-summary-confirmed' class='col-xs-12 col-md-4 col-lg-4'>"+
        "    <h5 class='green'>Opps Confirmed : <span class='{{id}}-opp-summary-confirmed-headline'></span></h5>"+
        "    <h5 class='red'>Threats Confirmed : <span class='{{id}}-opp-summary-confirmed-threat'></span></h5>"+
        "    </div>"+
        ""+
        "    <div id='{{id}}-opp-summary-unconfirmed' class='col-xs-12 col-md-4 col-lg-4'>"+
        "    <h5 class='green'>Opps Unconfirmed : <span class='{{id}}-opp-summary-unconfirmed-headline'></span></h5>"+
        "    <h5 class='red'>Threats Unconfirmed : <span class='{{id}}-opp-summary-unconfirmed-threat'></span></h5>"+
        "    </div>"+
        ""+
        "    <div id='{{id}}-opp-summary-lost' class='col-xs-12 col-md-4 col-lg-4'>"+
        "    <h5 class='green'>Opps Lost : <span class='{{id}}-opp-summary-lost-headline'></span></h5>"+
        "    <h5 class='red'>Threats Lost : <span class='{{id}}-opp-summary-lost-threat'></span></h5>"+
        "    </div>"+
        

            $body.append(templates['container']({'id':_uid}));
            $j('#' + _uid).append(templates['heading-no-links']({'title':'Opportunity Timeline'}));
            $j('#' + _uid).append(templates['headline-opportunities']({'id':_uid}));
            
            var summaryDataCurrent = _(_models.opps.groups.totalByStageCategory.top(Infinity)).map(function(v) { return [v.key, v.value]; }).object().value();
            var summaryDataPrevious = _(_models.opps.groups.totalByStageCategory.top(Infinity)).map(function(v) { return [v.key, v.value]; }).object().value();
            
            console.log(f.toGbpWithComparison(summaryDataCurrent.Confirmed.Headline, summaryDataPrevious.Confirmed.Headline, ''));
            
            $j('#' + _uid + '-opp-summary-confirmed-headline').html(f.toGbpWithComparison(summaryDataCurrent.Confirmed.Headline, summaryDataPrevious.Confirmed.Headline, ''));
            
            

            var chartData = _models.opps.dims.dummy.top(Infinity);

            chtSalesByCategory = new CHART.OpportunitySalesByCategory(_uid + '-charts-opp-stages', chartData);
            chtSalesByOwner = new CHART.OpportunitySalesByOwner(_uid + '-charts-opp-owners', chartData);
            
            var tableData = _(_model.opps.dims.dummy.top(Infinity)).groupBy(function(v) { return v.StageCategory; });
            
            tblOppsConfirmed = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-confirmed', tableData.Confirmed);
            tblOppsLikely = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-likely', tableData.Likely);     
            tblOppsOpen = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-open', tableData.Open);     
            tblOppsUnlikely = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-unlikely', tableData.Unlikely);     
            tblOppsLost = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-lost', tableData.Lost);
            //tmlOpps = new TIMELINE.HeadlineOpportunities(_uid + '-charts-opp-timeline',_models.opps.getData2('timeline', {'stageCategory' : 'Confirmed'}, false));
            //chtSales = new CHART.OpportunitySales(_uid + '-charts-opp-sales', _models.opps.getData2('monthlySales', {'stageCategory' : 'Confirmed'}, false));
            
            
            //chtSales = new CHART.OpportunitySalesByCategory(_uid + '-charts-opp-buckets', _models.opps.getData2('list', {}, false));
            //tblOppsConfirmed = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-confirmed', _models.opps.getData2('list', {'stageCategory' : 'Confirmed'}, true));
            //tblOppsLikely = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-likely', _models.opps.getData2('list', {'stageCategory' : 'Likely'}, true));     
            //tblOppsOpen = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-open', _models.opps.getData2('list', {'stageCategory' : 'Open'}, true));     
            //tblOppsUnlikely = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-unlikely', _models.opps.getData2('list', {'stageCategory' : 'Unlikely'}, true));     
            //tblOppsLost = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-lost', _models.opps.getData2('list', {'stageCategory' : 'Lost'}, true));
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