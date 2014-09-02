var VIEW_COUNTDOWN = (function($v) {

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
            tblLeaderboard = new TABLE.CountdownLeaderboard(_uid + '-tables-promo-leaderboard', _models.promo.groupByOwner('all', 20000), _models.promo.getTotal('all', 180000)); 
            chtLastWeek = new CHART.CountdownLeaderboard(_uid + '-charts-promo-lastweek', _models.promo.getData('lastweek'), _models.promo.getTargetSeries(1540));
            tblLastWeek = new TABLE.CountdownLeaderboard(_uid + '-tables-promo-lastweek', _models.promo.groupByOwner('lastweek', 1540), _models.promo.getTotal('lastweek', 13860));  
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

})(VIEW);