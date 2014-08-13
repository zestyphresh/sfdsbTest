var CHART_OPPORTUNITIES = (function($c) {
    
    var _priv = $c._priv;
    
    $c.OpportunityTimeline = function(id, data) {  
        
        var svg =  dimple.newSvg('#' + id, '100%', '100%');
        var chart = new dimple.chart(svg, data).setMargins("230px", "30px", "30px", "40px");
        
        var xAxis = chart.addTimeAxis('x', 'date', '%Y-%m-%d', '%Y-%m-%d');
            xAxis.title = 'Date';
            xAxis.addOrderRule('date');
                
        var yAxis = chart.addCategoryAxis('y', 'opp');
            yAxis.title = null;
            yAxis.addOrderRule('date');
             
        var series = chart.addSeries(['opp', 'type'], dimple.plot.line);   
            series.lineMarkers = false;
            series.lineWeight = 9;

        series.getTooltipText = function (e) {
            return ['(' + e.cx + ')'];
        };  

        chart.assignColor("Live Date", "LimeGreen", "LimeGreen", 0.75);   
        chart.assignColor("Delivery Date", "LightSkyBlue", "LightSkyBlue", 0.75);   
        chart.assignColor("Store Date", "YellowGreen", "YellowGreen", 0.75);   
        chart.assignColor("End Date", "Gainsboro", "Gainsboro", 0.75);   
                
        chart.draw();

        function reload(data) { chart.data = data; chart.draw(); }
        function resize() { chart.draw(); }

        return { reload : reload, resize : resize };              
                           
    };
    
    $c.OpportunitySales = function(id, data) {
        
        var svg = dimple.newSvg('#' + id, '100%', '100%');
        var chart = new dimple.chart(svg, data).setMargins("140px", "30px", "40px", "60px");
                
        var xAxis = chart.addTimeAxis('x', 'date', '%Y-%m', '%Y-%m');
            xAxis.title = 'Month';
            xAxis.addOrderRule('date');
                
        var yAxis = chart.addMeasureAxis('y', 'value');
            yAxis.title = 'Monthly Sales';
               
        var series = chart.addSeries('recordType', dimple.plot.line); 
            series.lineMarkers = true;
            series.lineWeight = 4;
          
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