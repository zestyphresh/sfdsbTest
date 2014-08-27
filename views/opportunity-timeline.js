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
        
        //Init models
        function init(renderAfter) {
            
            //_models['opps'] = new gblModel.HeadlineOpportunities;
            _models['opps2'] = new gblModel.HeadlineOpportunitiesCf;
            
            //_models.opps.fetch(), 

            Q.all([_models.opps2.fetch()]).done(function() {
                
                _loaded = true;

                if (renderAfter) render();

            });

        }
            
        //Render function, adds all dom elements and creates charts, tables and filters
        function render() { 

            $body.append(templates['container']({'id':_uid}));
            $j('#' + _uid).append(templates['heading-no-links']({'title':'Opportunity Timeline'}));
            $j('#' + _uid).append(templates['headline-opportunities']({'id':_uid}));
            
            var composite = dc.compositeChart('#' + _uid + '-charts-opp-buckets');
            
            console.log(_models.opps2.val1()[0], _models.opps2.val1()[1]);
            
             composite
                .width(768)
                .height(480)
                .x(d3.scale.linear().domain([0,20]))
                .yAxisLabel("The Y Axis")
                .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
                .renderHorizontalGridLines(true)
                .compose([
                    dc.rowChart(composite)
                        .dimension(_models.opps2.val1()[0])
                        .colors('red')
                        .group(_models.opps2.val1()[1], "Top Line"),
                    dc.rowChart(composite)
                        .dimension(_models.opps2.val1()[0])
                        .colors('blue')
                        .group(_models.opps2.val1()[1], "Bottom Line")
                    ])
                .brushOn(false)
            .render();

            //chtSales = new CHART.OpportunitySalesByCategory(_uid + '-charts-opp-buckets', _models.opps.getData2('list', {}, false));
            tblOppsConfirmed = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-confirmed', _models.opps.getData2('list', {'stageCategory' : 'Confirmed'}, true));
            tblOppsLikely = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-likely', _models.opps.getData2('list', {'stageCategory' : 'Likely'}, true));     
            tblOppsOpen = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-open', _models.opps.getData2('list', {'stageCategory' : 'Open'}, true));     
            tblOppsUnlikely = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-unlikely', _models.opps.getData2('list', {'stageCategory' : 'Unlikely'}, true));     
            tblOppsLost = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-lost', _models.opps.getData2('list', {'stageCategory' : 'Lost'}, true));
            tmlOpps = new TIMELINE.HeadlineOpportunities(_uid + '-charts-opp-timeline',_models.opps.getData2('timeline', {'stageCategory' : 'Confirmed'}, false));
            chtSales = new CHART.OpportunitySales(_uid + '-charts-opp-sales', _models.opps.getData2('monthlySales', {'stageCategory' : 'Confirmed'}, false));
            
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