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
        var chtTimeline, chtSales, tblOpps;
        
        //Init models
        function init(renderAfter) {
            
            _models['opps'] = new gblModel['HeadlineOpportunities'];

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
    
            chtTimeline = new CHART.OpportunityTimeline(_uid + '-charts-opp-timeline', _models.opps.getDataByWeek());
            chtSales = new CHART.OpportunitySales(_uid + '-charts-opp-sales', _models.opps.getDataByWeek());
            tblOpps = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list', _models.opps.getData());      
    
            renderFilters(_uid + '-filters');

        }
        
        //Renders filters, separate to render() so it can be called to refresh filters
        function renderFilters(id) {
    
            $j('#' + _uid).empty().append(templates['dropdown-filters'](_models.opps.getFilters(_uid))); 
    
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