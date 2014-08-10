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

        var _requiredModels = [
            {'shortName' : 'promo', 'modelName' : 'CountdownPromo'}
        ];

        //Public vars
        var chtLeaderboard, tblLeaderboard, chtLastWeek, tblLastWeek, chtWeeklySales;
        
        //Init models
        function init(renderAfter) {
            
            _models['promo'] = new _gblModel['CountdownPromo'];

            Q.all([_models.promo.fetch()]).done(function() {
                
                _loaded = true;
                
                if (renderAfter) render();

            });

            /*_counter = 1;
            
            _(_requiredModels).each(function(v, k) {
                
                _models[v.shortName] = new _gblModel[v.modelName];
                _models[v.shortName].fetch(function(loaded) {
                    
                    if (loaded) _counter--; 
                    
                    console.log('in fetch', v.shortName);
                    
                });
                
            });
            
            if (renderAfter) {
                
                console.log('in render after');
                
                while (_counter != 0) {}; //blocking code
                
                render();
                
            }
            */
            
        }

        //Render function, adds all dom elements and creates charts, tables and filters
        function render() { 
            
            $body.append(templates['container']({'id':_uid}))
            $j('#' + _id).append(templates['heading-no-links']({'title':'Countdown Promotion'}));
            $j('#' + _id).append(templates['countdown-promo']({'id':_uid}));
    
            chtLeaderboard = new CHART.CountdownLeaderboard(_uid + '-charts-promo-leaderboard', _models['promo'].getData('alltime'), false);
            tblLeaderboard = new TABLE.CountdownLeaderboard(_uid + '-tables-promo-leaderboard', _models['promo'].groupByOwner('alltime', 20000)); 
            chtLastWeek = new CHART.CountdownLeaderboard(_uid + '-charts-promo-lastweek', _models['promo'].getData('lastweek'), true);
            tblLastWeek = new TABLE.CountdownLeaderboard(_uid + '-tables-promo-lastweek', _models['promo'].groupByOwner('lastweek', 1360));  
            chtWeeklySales = new CHART.CountdownWeeklySales(_uid + '-charts-promo-weeklysales', _models['promo'].getData('alltime'));

        }
    
        return {
            init : init,
            isLoaded : function() { return _loaded; },
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
            _models = {}
        ;
        
        var _requiredModels = [
            {'shortName' : 'opps', 'modelName' : 'HeadlineOpportunities'}
        ];

        //Public vars
        var chtTimeline, chtSales, tblOpps;
        
        //Init models
        function init(renderAfter) {
            
            _counter = 1;
            
            _(_requiredModels).each(function(v, k) {
                
                _models[v.shortName] = new _gblModel[v.modelName];
                _models[v.shortName].fetch(function(loaded) {
                    
                    if (loaded) _counter--; 
                    
                });
                
            });
            
            if (renderAfter) {
                
                while (_counter != 0) {}; //blocking code
                
                render();
                
            }
            
        }

        //Render function, adds all dom elements and creates charts, tables and filters
        function render() { 
        
            $body.append(templates['container']({'id':_uid}))
            $j('#' + _uid).append(templates['heading-no-links']({'title':'Opportunity Timeline'}));
            $j('#' + _uid).append(templates['headline-opportunities']({'id':_id}));
    
            chtTimeline = new CHART.OpportunityTimeline(_uid + '-charts-opp-timeline', _models['opps'].getData(_id, 'byweek'));
            chtSales = new CHART.OpportunitySales(_uid + '-charts-opp-sales', _models['opps'].getData(_id, 'byweek'));
            tblOpps = new TABLE.HeadlineOpportunities(_uid + '-tables-opp-list', _models['opps'].getData(_id, 'normal'));      
    
            renderFilters(_id + '-filters');

        }
        
        //Renders filters, separate to render() so it can be called to refresh filters
        function renderFilters(id) {
    
            $j('#' + id).empty().append(templates['dropdown-filters'](model.getFilters(_id))); 
    
        }
        
        return { 
            init : init,
            render : render,
            setModel : function(name, model) { _models[name] = model; }
        };
        
    };
    
    return $v;

})(VIEW);