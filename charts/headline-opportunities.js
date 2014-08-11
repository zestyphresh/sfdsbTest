var CHART_OPPORTUNITIES = (function($c) {
    
    var _priv = $c._priv;
    
    $c.OpportunityTimeline = function(id, data) {  
        
        var svg =  dimple.newSvg('#' + id, '100%', '100%');
        var chart = new dimple.chart(svg, data).setMargins("140px", "30px", "40px", "120px");
        
        var xAxis = chart.addCategoryAxis('x', 'week');
            xAxis.title = 'Week';
            xAxis.addOrderRule('week');
                
        var yAxis = chart.addCategoryAxis('y', 'uName');
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