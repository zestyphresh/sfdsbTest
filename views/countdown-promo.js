if (!views) var views = {};

views['countdown-promo'] = (function() {
    
    //Private vars
    var _id = '_0002';
    
    //Public vars
    var chtLeaderboard, tblLeaderboard, chtLastWeek, tblLastWeek, chtWeeklySales;
    
    //First call of render() sets to true, used to check if view has been initialised
    var rendered = false;

    //Initialise handlebar templates
    var tmplView = Handlebars.compile(templates['countdown-promo']);

    //Render function, adds all dom elements and creates charts, tables and filters
    function render() { 
    
        $j('#test2').append(tmplView({'id':_id}));

        chtLeaderboard = new charts.CountdownLeaderboard(_id + '-charts-promo-leaderboard', models['countdown-promo'].getData('original'), false);
        //tblLeaderboard = new tables.HeadlineOpportunities(_id + '-tables-promo-leaderboard', models['countdown-promo'].groupByOwner('original', 20000)); 
        chtLastWeek = new charts.CountdownLeaderboard(_id + '-charts-promo-lastweek', models['countdown-promo'].getData('lastweek'), true);
        //tblLastWeek = new tables.HeadlineOpportunities(_id + '-tables-promo-lastweek', models['countdown-promo'].groupByOwner('lastweek', 1360));  
        chtWeeklySales = new charts.CountdownWeeklySales(_id + '-charts-promo-weeklysales', models['countdown-promo'].getData('original'));

        rendered = true;

    }

    return { 
        render : render,
        isRendered : function() { return rendered; }
    };

}());