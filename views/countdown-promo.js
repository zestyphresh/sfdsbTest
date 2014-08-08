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
            
            $body.append(templates['container']({'id':_id}))
            $j('#' + _id).append(templates['heading-no-links']({'title':'Countdown Promotion'}));
            $j('#' + _id).append(templates['countdown-promo']({'id':_id}));
    
            chtLeaderboard = new CHART.CountdownLeaderboard(_id + '-charts-promo-leaderboard', _model.getData(_id, 'alltime'), false);
            tblLeaderboard = new TABLE.CountdownLeaderboard(_id + '-tables-promo-leaderboard', _model.groupByOwner(_id, 'alltime', 20000)); 
            chtLastWeek = new CHART.CountdownLeaderboard(_id + '-charts-promo-lastweek', _model.getData(_id, 'lastweek'), true);
            tblLastWeek = new TABLE.CountdownLeaderboard(_id + '-tables-promo-lastweek', _model.groupByOwner(_id, 'lastweek', 1360));  
            chtWeeklySales = new CHART.CountdownWeeklySales(_id + '-charts-promo-weeklysales', _model.getData(_id, 'alltime'));

        }
    
        return { 
            render : render
        };
        
    };
    
    return $v;

})(VIEW);