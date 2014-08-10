{"filter":false,"title":"countdown-promotion.js","tooltip":"/charts/countdown-promotion.js","undoManager":{"mark":88,"position":88,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":41}},"text":"var CHART_OPPORTUNITIES = (function($c) {"},{"action":"insertText","range":{"start":{"row":0,"column":41},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":65,"column":0}},"lines":["    ","    var _priv = $c._priv;","    ","    $c.OpportunityTimeline = function(id, data) {  ","        ","        var svg =  dimple.newSvg('#' + id, '100%', '100%');","        var chart = new dimple.chart(svg, data).setMargins(\"140px\", \"30px\", \"40px\", \"120px\");","        ","        var xAxis = chart.addCategoryAxis('x', 'week');","            xAxis.title = 'Week';","            xAxis.addOrderRule('week');","                ","        var yAxis = chart.addCategoryAxis('y', 'name');","            yAxis.title = 'Opportunity';","            yAxis.addOrderRule('week');","             ","        var series = chart.addSeries('type', dimple.plot.bar);     ","               ","        var legend = chart.addLegend(\"50px\", \"-20px\", \"100%\", \"-30px\");         ","                           ","        series.getTooltipText = function (e) {","            return [e.aggField[0] + ' - ' + numeral(e.yValue).format('$0,0')];","        };   ","                ","        chart.draw();","","        function reload(data) { chart.data = data; chart.draw(); }","        function resize() { chart.draw(); }","","        return { reload : reload, resize : resize };              ","                           ","    };","    ","    $c.OpportunitySales = function(id, data) {","        ","        var svg = dimple.newSvg('#' + id, '100%', '100%');","        var chart = new dimple.chart(svg, data).setMargins(\"140px\", \"30px\", \"40px\", \"30px\");","                ","        var xAxis = chart.addCategoryAxis('x', 'month');","            xAxis.title = 'Month';","            xAxis.addOrderRule('month');","                ","        var yAxis = chart.addMeasureAxis('y', 'weeklyValue');","            yAxis.title = 'Monthly Sales';","               ","        var series = chart.addSeries('recordType', dimple.plot.line); ","          ","        var legend = chart.addLegend(\"50px\", \"-20px\", \"100%\", \"-30px\");        ","                       ","        series.getTooltipText = function (e) {","            return [e.aggField[0] + ' - ' + numeral(e.yValue).format('$0,0')];","            };        ","           ","        chart.draw();","                ","        function reload(data) { chart.data = data; chart.draw(); }","        function resize() { chart.draw(); }","","        return { reload : reload, resize : resize };   ","                                    ","    };","    ","    return $c;","    "]},{"action":"insertText","range":{"start":{"row":65,"column":0},"end":{"row":65,"column":10}},"text":"})(CHART);"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":23}},"text":"OPPORTUNITIES"},{"action":"insertText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":11}},"text":"C"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":11},"end":{"row":0,"column":12}},"text":"O"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":12},"end":{"row":0,"column":13}},"text":"U"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":13},"end":{"row":0,"column":14}},"text":"N"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":14},"end":{"row":0,"column":15}},"text":"T"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":15},"end":{"row":0,"column":16}},"text":"D"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":16},"end":{"row":0,"column":17}},"text":"O"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":17},"end":{"row":0,"column":18}},"text":"W"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":18},"end":{"row":0,"column":19}},"text":"N"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":61,"column":0},"end":{"row":61,"column":6}},"text":"    };"},{"action":"removeLines","range":{"start":{"row":4,"column":0},"end":{"row":61,"column":0}},"nl":"\n","lines":["    $c.OpportunityTimeline = function(id, data) {  ","        ","        var svg =  dimple.newSvg('#' + id, '100%', '100%');","        var chart = new dimple.chart(svg, data).setMargins(\"140px\", \"30px\", \"40px\", \"120px\");","        ","        var xAxis = chart.addCategoryAxis('x', 'week');","            xAxis.title = 'Week';","            xAxis.addOrderRule('week');","                ","        var yAxis = chart.addCategoryAxis('y', 'name');","            yAxis.title = 'Opportunity';","            yAxis.addOrderRule('week');","             ","        var series = chart.addSeries('type', dimple.plot.bar);     ","               ","        var legend = chart.addLegend(\"50px\", \"-20px\", \"100%\", \"-30px\");         ","                           ","        series.getTooltipText = function (e) {","            return [e.aggField[0] + ' - ' + numeral(e.yValue).format('$0,0')];","        };   ","                ","        chart.draw();","","        function reload(data) { chart.data = data; chart.draw(); }","        function resize() { chart.draw(); }","","        return { reload : reload, resize : resize };              ","                           ","    };","    ","    $c.OpportunitySales = function(id, data) {","        ","        var svg = dimple.newSvg('#' + id, '100%', '100%');","        var chart = new dimple.chart(svg, data).setMargins(\"140px\", \"30px\", \"40px\", \"30px\");","                ","        var xAxis = chart.addCategoryAxis('x', 'month');","            xAxis.title = 'Month';","            xAxis.addOrderRule('month');","                ","        var yAxis = chart.addMeasureAxis('y', 'weeklyValue');","            yAxis.title = 'Monthly Sales';","               ","        var series = chart.addSeries('recordType', dimple.plot.line); ","          ","        var legend = chart.addLegend(\"50px\", \"-20px\", \"100%\", \"-30px\");        ","                       ","        series.getTooltipText = function (e) {","            return [e.aggField[0] + ' - ' + numeral(e.yValue).format('$0,0')];","            };        ","           ","        chart.draw();","                ","        function reload(data) { chart.data = data; chart.draw(); }","        function resize() { chart.draw(); }","","        return { reload : reload, resize : resize };   ","                                    "]},{"action":"insertText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":57}},"text":"    CountdownLeaderboard = function(id, data, lastWeek) {"},{"action":"insertText","range":{"start":{"row":4,"column":57},"end":{"row":5,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":5,"column":0},"end":{"row":87,"column":0}},"lines":["","        var svg = dimple.newSvg('#' + id, '100%', '100%');","            ","        var chart = new dimple.chart(svg, data).setMargins('60px', '30px', '50px', '40px');","        ","        var xAxis = chart.addMeasureAxis('x', 'value');","            xAxis.title = 'Gross Value (£)';","            xAxis.ticks = 5;","            xAxis.tickFormat = '0,f'; ","                        ","        var yAxis = chart.addCategoryAxis('y', 'owner');","            yAxis.title = null;","            yAxis.addOrderRule('value'); ","        ","        var series = chart.addSeries('owner', dimple.plot.bar);","        ","        var targetSeries = chart.addSeries('owner', dimple.plot.line);            ","            var target = !lastWeek ? 20000 : 1540;     ","            var targetData = [{'owner':'Matt K', 'value':target},","                              {'owner':'Phil L', 'value':target},","                              {'owner':'Mark P', 'value':target},","                              {'owner':'Tracy B', 'value':target},","                              {'owner':'Steve G', 'value':target},","                              {'owner':'Steve H', 'value':target},","                              {'owner':'Norrie C', 'value':target},","                              {'owner':'Brian M', 'value':target},","                              {'owner':'Brian R', 'value':target}];            ","            ","        targetSeries.data = targetData;","        ","        series.getTooltipText = function (e) {","            return ['Total Value - ' + numeral(e.cx).format('$0,0')];","        };","        ","        targetSeries.getTooltipText = function (e) {","            return ['Target - ' + numeral(e.cx).format('$0,0')];","        };","        ","        chart.draw();","    ","    };","    ","    CountdownWeeklySales = function() {","","        var svg = dimple.newSvg('#' + id, '100%', '100%');","        var chart = new dimple.chart(svg, data).setMargins(\"80px\", \"30px\", \"40px\", \"120px\");","            ","        var xAxis = chart.addCategoryAxis('x', 'week');","            xAxis.title = xAxisTitle;","            xAxis.addOrderRule('week'); ","        ","        var yAxis = chart.addMeasureAxis(\"y\", \"value\");","            yAxis.title = yAxisTitle;","            yAxis.tickFormat = yAxisTickFormat;","        ","        var series = chart.addSeries(\"owner\", dimple.plot.bar);","            series.stacked = true;               ","        ","        var targetSeries = chart.addSeries('owner', dimple.plot.line);","            var target = 13850; ","            var targetData = [];","             ","            for (var i = 27; i <= 39; i++) {","                targetData.push({'owner': 'Target', 'week' : '2014-W' + i, 'value' : target });","            }","                ","            targetSeries.data = targetData;","                    ","        var legend =  chart.addLegend(\"30px\", \"-20px\", \"100%\", \"-30px\");        ","                           ","        series.getTooltipText = function (e) {","            return [e.aggField[0] + ' - ' + numeral(e.yValue).format('$0,0')];","        }; ","            ","        targetSeries.getTooltipText = function (e) {","            return [e.aggField[0] + ' - ' + numeral(e.yValue).format('$0,0')];","        };  ","        ","        chart.assignColor(\"Target\", \"red\", \"red\", 0.75)    ;   ","          ","        chart.draw();","                "]},{"action":"insertText","range":{"start":{"row":87,"column":0},"end":{"row":87,"column":6}},"text":"    };"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":4},"end":{"row":4,"column":5}},"text":"$"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":5},"end":{"row":4,"column":6}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":6},"end":{"row":4,"column":7}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":47,"column":4},"end":{"row":47,"column":7}},"text":"$c."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":47},"end":{"row":10,"column":48}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":48},"end":{"row":10,"column":49}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":49},"end":{"row":10,"column":50}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":50},"end":{"row":10,"column":51}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":51},"end":{"row":10,"column":52}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":52},"end":{"row":10,"column":53}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":52},"end":{"row":10,"column":53}},"text":"V"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":32},"end":{"row":17,"column":33}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":33},"end":{"row":17,"column":34}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":34},"end":{"row":17,"column":35}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":35},"end":{"row":17,"column":36}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":36},"end":{"row":17,"column":37}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":37},"end":{"row":17,"column":38}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":37},"end":{"row":17,"column":38}},"text":"V"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":48},"end":{"row":15,"column":53}},"text":"owner"},{"action":"insertText","range":{"start":{"row":15,"column":48},"end":{"row":15,"column":49}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":49},"end":{"row":15,"column":50}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":50},"end":{"row":15,"column":51}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":51},"end":{"row":15,"column":52}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":52},"end":{"row":15,"column":53}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":53},"end":{"row":15,"column":54}},"text":"P"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":54},"end":{"row":15,"column":55}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":55},"end":{"row":15,"column":56}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":56},"end":{"row":15,"column":57}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":56},"end":{"row":15,"column":57}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":55},"end":{"row":15,"column":56}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":54},"end":{"row":15,"column":55}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":53},"end":{"row":15,"column":54}},"text":"P"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":53},"end":{"row":15,"column":54}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":54},"end":{"row":15,"column":55}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":55},"end":{"row":15,"column":56}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":56},"end":{"row":15,"column":57}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":57},"end":{"row":15,"column":58}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":58},"end":{"row":15,"column":59}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":59},"end":{"row":15,"column":60}},"text":"N"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":60},"end":{"row":15,"column":61}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":61},"end":{"row":15,"column":62}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":62},"end":{"row":15,"column":63}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":44},"end":{"row":21,"column":49}},"text":"owner"},{"action":"insertText","range":{"start":{"row":21,"column":44},"end":{"row":21,"column":45}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":45},"end":{"row":21,"column":46}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":46},"end":{"row":21,"column":47}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":47},"end":{"row":21,"column":48}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":48},"end":{"row":21,"column":49}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":49},"end":{"row":21,"column":50}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":44},"end":{"row":21,"column":50}},"text":"target"},{"action":"insertText","range":{"start":{"row":21,"column":44},"end":{"row":21,"column":45}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":45},"end":{"row":21,"column":46}},"text":"w"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":46},"end":{"row":21,"column":47}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":47},"end":{"row":21,"column":48}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":48},"end":{"row":21,"column":49}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":48},"end":{"row":21,"column":49}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":47},"end":{"row":21,"column":48}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":46},"end":{"row":21,"column":47}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":46},"end":{"row":21,"column":47}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":47},"end":{"row":21,"column":48}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":48},"end":{"row":21,"column":49}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":48},"end":{"row":15,"column":63}},"text":"salespersonName"},{"action":"insertText","range":{"start":{"row":15,"column":48},"end":{"row":15,"column":49}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":49},"end":{"row":15,"column":50}},"text":"w"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":50},"end":{"row":15,"column":51}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":51},"end":{"row":15,"column":52}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":52},"end":{"row":15,"column":53}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":50},"end":{"row":23,"column":51}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":51},"end":{"row":23,"column":52}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":52},"end":{"row":23,"column":53}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":53},"end":{"row":23,"column":54}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":54},"end":{"row":23,"column":55}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":55},"end":{"row":23,"column":56}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":55},"end":{"row":23,"column":56}},"text":"V"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":24,"column":50},"end":{"row":24,"column":55}},"text":"value"},{"action":"insertText","range":{"start":{"row":24,"column":50},"end":{"row":24,"column":60}},"text":"grossValue"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":25,"column":50},"end":{"row":25,"column":55}},"text":"value"},{"action":"insertText","range":{"start":{"row":25,"column":50},"end":{"row":25,"column":60}},"text":"grossValue"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":26,"column":51},"end":{"row":26,"column":56}},"text":"value"},{"action":"insertText","range":{"start":{"row":26,"column":51},"end":{"row":26,"column":61}},"text":"grossValue"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":27,"column":51},"end":{"row":27,"column":56}},"text":"value"},{"action":"insertText","range":{"start":{"row":27,"column":51},"end":{"row":27,"column":61}},"text":"grossValue"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":28,"column":51},"end":{"row":28,"column":56}},"text":"value"},{"action":"insertText","range":{"start":{"row":28,"column":51},"end":{"row":28,"column":61}},"text":"grossValue"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":29,"column":52},"end":{"row":29,"column":57}},"text":"value"},{"action":"insertText","range":{"start":{"row":29,"column":52},"end":{"row":29,"column":62}},"text":"grossValue"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":30,"column":51},"end":{"row":30,"column":56}},"text":"value"},{"action":"insertText","range":{"start":{"row":30,"column":51},"end":{"row":30,"column":61}},"text":"grossValue"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":31,"column":51},"end":{"row":31,"column":56}},"text":"value"},{"action":"insertText","range":{"start":{"row":31,"column":51},"end":{"row":31,"column":61}},"text":"grossValue"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":15,"column":50},"end":{"row":15,"column":50},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1407691796709,"hash":"57b2c1b723a75cd7c1c939d91283472f4d5c9f58"}