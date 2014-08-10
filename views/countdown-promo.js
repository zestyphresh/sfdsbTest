var VIEW_COUNTDOWN = (function($v) {

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

        }

        //Render function, adds all dom elements and creates charts, tables and filters
        function render() { 
            
            $body.append(templates['container']({'id':_uid}))
            $j('#' + _uid).append(templates['heading-no-links']({'title':'Countdown Promotion'}));
            $j('#' + _uid).append(templates['countdown-promo']({'id':_uid}));
    
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

})(VIEW);