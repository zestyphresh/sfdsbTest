var VIEW_COUNTDOWN = (function($v) {

    $v.CountdownPromo = function(model) {
        
        //Private vars
        var _id = 'a0Lb0000006xVBr';
            _model = model
        ;
        
        //Public vars
        var chtLeaderboard, tblLeaderboard, chtLastWeek, tblLastWeek, chtWeeklySales;

        //Render function, adds all dom elements and creates charts, tables and filters
        function render() { 
        
            $j('#test2').append(templates['countdown-promo']({'id':_id}));
    
            chtLeaderboard = new charts.CountdownLeaderboard(_id + '-charts-promo-leaderboard', _model.getData(_id, 'alltime'), false);
            tblLeaderboard = new tables.CountdownLeaderboard(_id + '-tables-promo-leaderboard', _model.groupByOwner(_id, 'alltime', 20000)); 
            chtLastWeek = new charts.CountdownLeaderboard(_id + '-charts-promo-lastweek', _model.getData(_id, 'lastweek'), true);
            tblLastWeek = new tables.CountdownLeaderboard(_id + '-tables-promo-lastweek', _model.groupByOwner(_id, 'lastweek', 1360));  
            chtWeeklySales = new charts.CountdownWeeklySales(_id + '-charts-promo-weeklysales', _model.getData(_id, 'alltime'));

        }
    
        return { 
            render : render
        };
        
    };
    
    return $v;

})(VIEW);