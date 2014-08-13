var CHART_OPPORTUNITIES = (function($c) {
    
    var _priv = $c._priv;
    
    $c.OpportunityTimeline = function(id, data) {  
        
        var svg =  dimple.newSvg('#' + id, '100%', '100%');
        var chart = new dimple.chart(svg, data).setMargins("210px", "30px", "40px", "120px");
        
        var xAxis = chart.addTimeAxis('x', 'date', '%Y-%m-%d', '%Y-%m-%d');
            xAxis.title = 'Date';
            xAxis.addOrderRule('date');
                
        var yAxis = chart.addCategoryAxis('y', 'opp');
            yAxis.title = 'Opportunity';
            yAxis.addOrderRule('date');
             
        var series = chart.addSeries('opp', dimple.plot.line);   
            series.lineMarkers = true;
            series.lineWeight = 5;
               
        //var legend = chart.addLegend("50px", "-20px", "100%", "-30px");         
                           
        series.getTooltipText = function (e) {
            return [e.aggField[0] + ' - ' + numeral(e.yValue).format('$0,0')];
        };  
        
        chart.addColorAxis('date');
        
        chart.assignColor("Live Date", "orange", "orange", 0.75);   
        chart.assignColor("Delivery Date", "red", "red", 0.75);   
        chart.assignColor("Store Date", "green", "green", 0.75);   
        chart.assignColor("End Date", "grey", "grey", 0.75);   
                
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