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
            
            $body.append(templates['container']({'id':_id}))
            $j('#' + _id).append(templates['heading-no-links']({'title':'Countdown Promotion'}));
            $j('#' + _id).append(templates['countdown-promo']({'id':_id}));
    
            chtLeaderboard = new CHART.CountdownLeaderboard(_id + '-charts-promo-leaderboard', _models['promo'].getData('alltime'), false);
            tblLeaderboard = new TABLE.CountdownLeaderboard(_id + '-tables-promo-leaderboard', _models['promo'].groupByOwner('alltime', 20000)); 
            chtLastWeek = new CHART.CountdownLeaderboard(_id + '-charts-promo-lastweek', _models['promo'].getData('lastweek'), true);
            tblLastWeek = new TABLE.CountdownLeaderboard(_id + '-tables-promo-lastweek', _models['promo'].groupByOwner('lastweek', 1360));  
            chtWeeklySales = new CHART.CountdownWeeklySales(_id + '-charts-promo-weeklysales', _models['promo'].getData('alltime'));

        }
    
        return {
            init : init,
            render : render
        };
        
    };
    
    return $v;

})(VIEW);