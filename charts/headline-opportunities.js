var CHART_OPPORTUNITIES = (function($c) {
    
    var _priv = $c._priv;
    
    $c.OpportunitySalesByCategory = function(id, data) {
        
        var _data = data;

        var svg = dimple.newSvg('#' + id, '100%', '100%');
        var chart = new dimple.chart(svg, _data).setMargins("60px", "30px", "40px", "60px");
                
        var xAxis = chart.addMeasureAxis('x', 'thisYearValue');
            xAxis.title = 'Value This Year (£)';
                
        var yAxis = chart.addCategoryAxis('y', ['stageCategory', 'recordType']);
            yAxis.title = 'Stage';
            yAxis.addOrderRule(['Lost', 'Unlikely', 'Open', 'Likely', 'Confirmed']);
               
        var series = chart.addSeries('recordType', dimple.plot.bar); 

        var legend = chart.addLegend("60px", "-20px", "100%", "-30px");        
                       
        series.getTooltipText = function (e) {
            return [e.aggField[0] + ' - ' + numeral(e.yValue).format('$0,0')];
        };        
           
        chart.draw();
        
        function reload(data) { _data = data; chart.data = _data; chart.draw(); }
        function resize() { chart.draw(); }

        return { 
            reload : reload, 
            resize : resize 
        };   
        
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