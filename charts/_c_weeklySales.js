var CHART_WEEKLY_SALES = (function($c) {
    
    var _priv = $c._priv;
    
    $c.WeeklySales = function(id, data) {
        
        var _data = data;

        var svg = dimple.newSvg('#' + id, '100%', '100%');
        var chart = new dimple.chart(svg, _data).setMargins("60px", "30px", "40px", "60px");
                
        var yAxis = chart.addMeasureAxis('y', 'quantity');
            yAxis.title = 'Quantity';
                
        var xAxis = chart.addTimeAxis('x', 'stringDate', '%Y-%m-%d', '%Y-%w');
            xAxis.title = 'Date';

        var series = chart.addSeries(null, dimple.plot.bar); 
                       
        //series.getTooltipText = function (e) {
        //    return [e.aggField[0] + ' - ' + numeral(e.yValue).format('$0,0')];
        //};        
           
        chart.draw();
        
        function reload(data) { _data = data; chart.data = _data; chart.draw(); }
        function resize() { chart.draw(); }

        return { 
            reload : reload, 
            resize : resize 
        };   
        
    };

    return $c;
    
})(CHART);