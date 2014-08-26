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
        var tmlOpps, chtSales, tblOppsConfirmed, tblOppsLikely, tblOppsOpen, tblOppsUnlikely, tblOppsLost, chtOppsBucket;
        
        //Init models
        function init(renderAfter) {
            
            _models['opps'] = new gblModel.HeadlineOpportunities;

            Q.all([_models.opps.fetch()]).done(function() {
                
                _loaded = true;

                if (renderAfter) render();

            });

        }
            
        //Render function, adds all dom elements and creates charts, tables and filters
        function render() { 

            $body.append(templates['container']({'id':_uid}))
            $j('#' + _uid).append(templates['heading-no-links']({'title':'Opportunity Timeline'}));
            $j('#' + _uid).append(templates['headline-opportunities']({'id':_uid}));
            
            chtSales = new CHART.OpportunitySales(_uid + '-charts-opp-buckets', _models.opps.getData2('list', {}, false));
            tblOppsConfirmed = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-confirmed', _models.opps.getData2('list', {'stageCategory' : 'Confirmed'}, true));
            tblOppsLikely = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-likely', _models.opps.getData2('list', {'stageCategory' : 'Likely'}, true));     
            tblOppsOpen = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-open', _models.opps.getData2('list', {'stageCategory' : 'Open'}, true));     
            tblOppsUnlikely = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-unlikely', _models.opps.getData2('list', {'stageCategory' : 'Unlikely'}, true));     
            tblOppsLost = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-lost', _models.opps.getData2('list', {'stageCategory' : 'Lost'}, true));
            tmlOpps = new TIMELINE.HeadlineOpportunities(_uid + '-charts-opp-timeline',_models.opps.getData2('timeline', {'stageCategory' : 'Confirmed'}, false));
            chtSales = new CHART.OpportunitySales(_uid + '-charts-opp-sales', _models.opps.getData2('monthlySales', {'stageCategory' : 'Confirmed'}, false));
            
            //tblOppsConfirmed = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-confirmed', _models.opps.getData.oppsByStageCategory('Confirmed'));
            //tblOppsLikely = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-likely', _models.opps.getData.oppsByStageCategory('Likely'));     
            //tblOppsOpen = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-open', _models.opps.getData.oppsByStageCategory('Open'));     
            //tblOppsUnlikely = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-unlikely', _models.opps.getData.oppsByStageCategory('Unlikely'));     
            //tblOppsLost = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list-lost', _models.opps.getData.oppsByStageCategory('Lost'));
            //tmlOpps = new TIMELINE.HeadlineOpportunities(_uid + '-charts-opp-timeline',_models.opps.getData.timeline());
            //chtSales = new CHART.OpportunitySales(_uid + '-charts-opp-sales', _models.opps.getData.monthlySales());
    
            renderFilters(_uid + '-filters');

        }
        
        //Renders filters, separate to render() so it can be called to refresh filters
        function renderFilters(id) {
    
            $j('#' + id).empty().append(templates['dropdown-filters'](_models.opps.getFilters())); 
    
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