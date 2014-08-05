var CHART = (function() {
    
    //constructor
    var module = function () {};
    
    module._priv = {};

    return module;
    
})();


var CHART_COUNTDOWN = (function($c) {
    
    var _priv = $c._priv;
    
    $c.CountdownLeaderboard = function(id, data, lastWeek) {

        var svg = dimple.newSvg('#' + id, '100%', '100%');
            
        var chart = new dimple.chart(svg, data).setMargins('60px', '30px', '50px', '40px');
        
        var xAxis = chart.addMeasureAxis('x', 'value');
            xAxis.title = 'Gross Value (£)';
            xAxis.ticks = 5;
            xAxis.tickFormat = '0,f'; 
                        
        var yAxis = chart.addCategoryAxis('y', 'owner');
            yAxis.title = null;
            yAxis.addOrderRule('value'); 
        
        var series = chart.addSeries('owner', dimple.plot.bar);
        
        var targetSeries = chart.addSeries('owner', dimple.plot.line);            
            var target = !lastWeek ? 20000 : 1540;     
            var targetData = [{'owner':'Matt K', 'value':target},
                              {'owner':'Phil L', 'value':target},
                              {'owner':'Mark P', 'value':target},
                              {'owner':'Tracy B', 'value':target},
                              {'owner':'Steve G', 'value':target},
                              {'owner':'Steve H', 'value':target},
                              {'owner':'Norrie C', 'value':target},
                              {'owner':'Brian M', 'value':target},
                              {'owner':'Brian R', 'value':target}];            
            
        targetSeries.data = targetData;
        
        series.getTooltipText = function (e) {
            return ['Total Value - ' + numeral(e.cx).format('$0,0')];
        };
        
        targetSeries.getTooltipText = function (e) {
            return ['Target - ' + numeral(e.cx).format('$0,0')];
        };
        
        chart.draw();
    
    };
    
    $c.CountdownWeeklySales = function() {

        var svg = dimple.newSvg('#' + id, '100%', '100%');
        var chart = new dimple.chart(svg, data).setMargins("80px", "30px", "40px", "120px");
            
        var xAxis = chart.addCategoryAxis('x', 'week');
            xAxis.title = xAxisTitle;
            xAxis.addOrderRule('week'); 
        
        var yAxis = chart.addMeasureAxis("y", "value");
            yAxis.title = yAxisTitle;
            yAxis.tickFormat = yAxisTickFormat;
        
        var series = chart.addSeries("owner", dimple.plot.bar);
            series.stacked = true;               
        
        var targetSeries = chart.addSeries('owner', dimple.plot.line);
            var target = 13850; 
            var targetData = [];
             
            for (var i = 27; i <= 39; i++) {
                targetData.push({'owner': 'Target', 'week' : '2014-W' + i, 'value' : target });
            }
                
            targetSeries.data = targetData;
                    
        var legend =  chart.addLegend("30px", "-20px", "100%", "-30px");        
                           
        series.getTooltipText = function (e) {
            return [e.aggField[0] + ' - ' + numeral(e.yValue).format('$0,0')];
        }; 
            
        targetSeries.getTooltipText = function (e) {
            return [e.aggField[0] + ' - ' + numeral(e.yValue).format('$0,0')];
        };  
        
        chart.assignColor("Target", "red", "red", 0.75)    ;   
          
        chart.draw();
                
    };
    
    return $c;
    
})(CHART);var CHART_OPPORTUNITIES = (function($c) {
    
    var _priv = $c._priv;
    
    $c.OpportunityTimeline = function(id, data) {  
        
        var svg =  dimple.newSvg('#' + id, '100%', '100%');
        var chart = new dimple.chart(svg, data).setMargins("140px", "30px", "40px", "120px");
        
        var xAxis = chart.addCategoryAxis('x', 'week');
            xAxis.title = 'Week';
            xAxis.addOrderRule('week');
                
        var yAxis = chart.addCategoryAxis('y', 'name');
            yAxis.title = 'Opportunity';
            yAxis.addOrderRule('week');
             
        var series = chart.addSeries('type', dimple.plot.bar);     
               
        var legend = chart.addLegend("50px", "-20px", "100%", "-30px");         
                           
        series.getTooltipText = function (e) {
            return [e.aggField[0] + ' - ' + numeral(e.yValue).format('$0,0')];
        };   
                
        chart.draw();

        function reload(data) { chart.data = data; chart.draw(); }
        function resize() { chart.draw(); }

        return { reload : reload, resize : resize };              
                           
    };
    
    $c.OpportunitySales = function(id, data) {
        
        var svg = dimple.newSvg('#' + id, '100%', '100%');
        var chart = new dimple.chart(svg, data).setMargins("140px", "30px", "40px", "30px");
                
        var xAxis = chart.addCategoryAxis('x', 'month');
            xAxis.title = 'Month';
            xAxis.addOrderRule('month');
                
        var yAxis = chart.addMeasureAxis('y', 'weeklyValue');
            yAxis.title = 'Monthly Sales';
               
        var series = chart.addSeries('recordType', dimple.plot.line); 
          
        var legend = chart.addLegend("50px", "-20px", "100%", "-30px");        
                       
        series.getTooltipText = function (e) {
            return [e.aggField[0] + ' - ' + numeral(e.yValue).format('$0,0')];
            };        
           
        chart.draw();
                
        function reload(data) { chart.data = data; chart.draw(); }
        function resize() { chart.draw(); }

        return { reload : reload, resize : resize };   
                                    
    };
    
    return $c;
    
})(CHART);