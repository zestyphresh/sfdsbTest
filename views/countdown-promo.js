var VIEW_COUNTDOWN = (function($v) {

    $v.CountdownPromo = function(model) {
        
        //Private vars
        var _id = 'a0Lb0000006xVBr';
            _model = model
        ;
        
        //Public vars
        var chtLeaderboard, tblLeaderboard, chtLastWeek, tblLastWeek, chtWeeklySales;

        //Initialise handlebar templates
        var template = Handlebars.compile(templates['countdown-promo']);
    
        //Render function, adds all dom elements and creates charts, tables and filters
        function render() { 
        
            $j('#test2').append(template({'id':_id}));
    
            chtLeaderboard = new charts.CountdownLeaderboard(_id + '-charts-promo-leaderboard', models['countdown-promo'].getData('original'), false);
            tblLeaderboard = new tables.CountdownLeaderboard(_id + '-tables-promo-leaderboard', models['countdown-promo'].groupByOwner('original', 20000)); 
            chtLastWeek = new charts.CountdownLeaderboard(_id + '-charts-promo-lastweek', models['countdown-promo'].getData('lastweek'), true);
            tblLastWeek = new tables.CountdownLeaderboard(_id + '-tables-promo-lastweek', models['countdown-promo'].groupByOwner('lastweek', 1360));  
            chtWeeklySales = new charts.CountdownWeeklySales(_id + '-charts-promo-weeklysales', models['countdown-promo'].getData('original'));

        }
    
        return { 
            render : render
        };
        
    };
    
    return $v;

})(VIEW);