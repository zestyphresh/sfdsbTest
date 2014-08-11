var VIEW = (function() {
        
    //constructor
    var module = function () {};
    
    module._priv = {
    };
    
    return module; 
    
})();var VIEW_COUNTDOWN = (function($v) {

    $v.CountdownPromo = function(args) {

        //Private vars
        var _args = args;
            _viewId = 'a0Lb0000006xVBr',
            _uid = _.uniqueId(_viewId + '-'), 
            _models = {},
            _loaded = false
        ;

        //Public vars
        var chtLeaderboard, tblLeaderboard, chtLastWeek, tblLastWeek, chtWeeklySales;
        
        //Init models
        function init(renderAfter) {
            
            $loading.show();
            
            _models['promo'] = new gblModel['CountdownPromo'];

            Q.all([_models.promo.fetch()]).done(function() {
                
                _loaded = true;
                $loading.hide();
                if (renderAfter) render();
                
            });

        }

        //Render function, adds all dom elements and creates charts, tables and filters
        function render() { 

            $body.append(templates['container']({'id':_uid}))
            $j('#' + _uid).append(templates['heading-no-links']({'title':'Countdown Promotion'}));
            $j('#' + _uid).append(templates['countdown-promo']({'id':_uid}));
    
            chtLeaderboard = new CHART.CountdownLeaderboard(_uid + '-charts-promo-leaderboard', _models.promo.getData('all'), _models.promo.getTargetSeries(20000));
            tblLeaderboard = new TABLE.CountdownLeaderboard(_uid + '-tables-promo-leaderboard', _models.promo.groupByOwner('all', 20000), _models.promo.getTotal('all', 20000)); 
            chtLastWeek = new CHART.CountdownLeaderboard(_uid + '-charts-promo-lastweek', _models.promo.getData('lastweek'), _models.promo.getTargetSeries(1360));
            tblLastWeek = new TABLE.CountdownLeaderboard(_uid + '-tables-promo-lastweek', _models.promo.groupByOwner('lastweek', 1360), _models.promo.getTotal('lastweek', 1360));  
            chtWeeklySales = new CHART.CountdownWeeklySales(_uid + '-charts-promo-weeklysales', _models.promo.getData('all'));

        }
    
        return {
            init : init,
            isLoaded : function() { return _loaded; },
            getUid : function() { return _uid; },
            render : render
        };
        
    };
    
    return $v;

})(VIEW);var VIEW_OPPORTUNITIES = (function($v) {

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
    
            chtTimeline = new CHART.OpportunityTimeline(_uid + '-charts-opp-timeline', _models['opps'].getData('byweek'));
            chtSales = new CHART.OpportunitySales(_uid + '-charts-opp-sales', _models['opps'].getData('byweek'));
            tblOpps = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list', _models['opps'].getData('normal'));      
    
            renderFilters(_uid + '-filters');

        }
        
        //Renders filters, separate to render() so it can be called to refresh filters
        function renderFilters(id) {
    
            $j('#' + _uid).empty().append(templates['dropdown-filters'](model.getFilters(_uid))); 
    
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