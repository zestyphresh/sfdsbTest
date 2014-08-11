{"filter":false,"title":"headline-opportunities.js","tooltip":"/charts/headline-opportunities.js","undoManager":{"mark":87,"position":87,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":37}},"text":"var TABLE_COUNTDOWN = (function($t) {"},{"action":"insertText","range":{"start":{"row":0,"column":37},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":2,"column":0}},"lines":["    "]},{"action":"insertText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":25}},"text":"    var _priv = $t._priv;"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":4},"end":{"row":0,"column":9}},"text":"TABLE"},{"action":"insertText","range":{"start":{"row":0,"column":4},"end":{"row":0,"column":5}},"text":"C"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":5},"end":{"row":0,"column":6}},"text":"H"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":6},"end":{"row":0,"column":7}},"text":"A"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":7},"end":{"row":0,"column":8}},"text":"R"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":8},"end":{"row":0,"column":9}},"text":"T"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":11}},"text":"C"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":11}},"text":"O"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":11}},"text":"U"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":11}},"text":"N"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":11}},"text":"T"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":11}},"text":"D"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":11}},"text":"O"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":11}},"text":"W"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":11}},"text":"N"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":11}},"text":"O"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":11},"end":{"row":0,"column":12}},"text":"P"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":12},"end":{"row":0,"column":13}},"text":"P"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":13},"end":{"row":0,"column":14}},"text":"O"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":14},"end":{"row":0,"column":15}},"text":"R"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":15},"end":{"row":0,"column":16}},"text":"T"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":16},"end":{"row":0,"column":17}},"text":"U"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":17},"end":{"row":0,"column":18}},"text":"N"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":18},"end":{"row":0,"column":19}},"text":"I"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":19},"end":{"row":0,"column":20}},"text":"T"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":20},"end":{"row":0,"column":21}},"text":"I"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":21},"end":{"row":0,"column":22}},"text":"E"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":22},"end":{"row":0,"column":23}},"text":"S"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":37},"end":{"row":0,"column":38}},"text":"t"},{"action":"insertText","range":{"start":{"row":0,"column":37},"end":{"row":0,"column":38}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":17},"end":{"row":2,"column":18}},"text":"t"},{"action":"insertText","range":{"start":{"row":2,"column":17},"end":{"row":2,"column":18}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":25},"end":{"row":3,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":4},"end":{"row":3,"column":56}},"text":"    cht.OpportunityTimeline = function(id, data) {  "},{"action":"insertText","range":{"start":{"row":3,"column":56},"end":{"row":4,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":4,"column":0},"end":{"row":31,"column":0}},"lines":["        ","        var svg =  dimple.newSvg('#' + id, '100%', '100%');","        var chart = new dimple.chart(svg, data).setMargins(\"140px\", \"30px\", \"40px\", \"120px\");","        ","        var xAxis = chart.addCategoryAxis('x', 'week');","            xAxis.title = 'Week';","            xAxis.addOrderRule('week');","                ","        var yAxis = chart.addCategoryAxis('y', 'name');","            yAxis.title = 'Opportunity';","            yAxis.addOrderRule('week');","             ","        var series = chart.addSeries('type', dimple.plot.bar);     ","               ","        var legend = chart.addLegend(\"50px\", \"-20px\", \"100%\", \"-30px\");         ","                           ","        series.getTooltipText = function (e) {","            return [e.aggField[0] + ' - ' + numeral(e.yValue).format('$0,0')];","        };   ","                ","        chart.draw();","","        function reload(data) { chart.data = data; chart.draw(); }","        function resize() { chart.draw(); }","","        return { reload : reload, resize : resize };              ","                           "]},{"action":"insertText","range":{"start":{"row":31,"column":0},"end":{"row":31,"column":6}},"text":"    };"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":4},"end":{"row":3,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":4},"end":{"row":4,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":6},"end":{"row":4,"column":7}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":5},"end":{"row":4,"column":6}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":4},"end":{"row":4,"column":5}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":4},"end":{"row":4,"column":5}},"text":"$"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":5},"end":{"row":4,"column":6}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":6},"end":{"row":33,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":33,"column":0},"end":{"row":33,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":4},"end":{"row":34,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":34,"column":0},"end":{"row":34,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":4},"end":{"row":34,"column":5}},"text":"$"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":5},"end":{"row":34,"column":6}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":6},"end":{"row":34,"column":7}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":7},"end":{"row":34,"column":50}},"text":"    OpportunitySales = function(id, data) {"},{"action":"insertText","range":{"start":{"row":34,"column":50},"end":{"row":35,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":35,"column":0},"end":{"row":61,"column":0}},"lines":["        ","        var svg = dimple.newSvg('#' + id, '100%', '100%');","        var chart = new dimple.chart(svg, data).setMargins(\"140px\", \"30px\", \"40px\", \"30px\");","                ","        var xAxis = chart.addCategoryAxis('x', 'month');","            xAxis.title = 'Month';","            xAxis.addOrderRule('month');","                ","        var yAxis = chart.addMeasureAxis('y', 'weeklyValue');","            yAxis.title = 'Monthly Sales';","               ","        var series = chart.addSeries('recordType', dimple.plot.line); ","          ","        var legend = chart.addLegend(\"50px\", \"-20px\", \"100%\", \"-30px\");        ","                       ","        series.getTooltipText = function (e) {","            return [e.aggField[0] + ' - ' + numeral(e.yValue).format('$0,0')];","            };        ","           ","        chart.draw();","                ","        function reload(data) { chart.data = data; chart.draw(); }","        function resize() { chart.draw(); }","","        return { reload : reload, resize : resize };   ","                                    "]},{"action":"insertText","range":{"start":{"row":61,"column":0},"end":{"row":61,"column":6}},"text":"    };"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":34,"column":10},"end":{"row":34,"column":11}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":34,"column":9},"end":{"row":34,"column":10}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":34,"column":8},"end":{"row":34,"column":9}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":34,"column":7},"end":{"row":34,"column":8}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":61,"column":6},"end":{"row":62,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":62,"column":0},"end":{"row":62,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":62,"column":4},"end":{"row":63,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":63,"column":0},"end":{"row":63,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":63,"column":4},"end":{"row":63,"column":5}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":63,"column":5},"end":{"row":63,"column":6}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":63,"column":6},"end":{"row":63,"column":7}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":63,"column":7},"end":{"row":63,"column":8}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":63,"column":8},"end":{"row":63,"column":9}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":63,"column":9},"end":{"row":63,"column":10}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":63,"column":10},"end":{"row":63,"column":11}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":63,"column":11},"end":{"row":63,"column":12}},"text":"$"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":63,"column":12},"end":{"row":63,"column":13}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":63,"column":13},"end":{"row":63,"column":14}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":63,"column":14},"end":{"row":64,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":64,"column":0},"end":{"row":64,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":64,"column":4},"end":{"row":65,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":65,"column":0},"end":{"row":65,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":65,"column":0},"end":{"row":65,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":64,"column":4},"end":{"row":65,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":64,"column":4},"end":{"row":65,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":65,"column":0},"end":{"row":65,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":65,"column":0},"end":{"row":65,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":65,"column":0},"end":{"row":65,"column":1}},"text":"}"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":65,"column":1},"end":{"row":65,"column":2}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":65,"column":2},"end":{"row":65,"column":4}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":65,"column":3},"end":{"row":65,"column":4}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":65,"column":3},"end":{"row":65,"column":4}},"text":"C"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":65,"column":4},"end":{"row":65,"column":5}},"text":"H"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":65,"column":5},"end":{"row":65,"column":6}},"text":"A"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":65,"column":6},"end":{"row":65,"column":7}},"text":"R"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":65,"column":7},"end":{"row":65,"column":8}},"text":"T"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":65,"column":8},"end":{"row":65,"column":9}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":65,"column":9},"end":{"row":65,"column":10}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":48},"end":{"row":13,"column":49}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":49},"end":{"row":13,"column":50}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":49},"end":{"row":13,"column":50}},"text":"N"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":57},"end":{"row":17,"column":60}},"text":"bar"},{"action":"insertText","range":{"start":{"row":17,"column":57},"end":{"row":17,"column":58}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":58},"end":{"row":17,"column":59}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":59},"end":{"row":17,"column":60}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":60},"end":{"row":17,"column":61}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":57},"end":{"row":17,"column":61}},"text":"line"},{"action":"insertText","range":{"start":{"row":17,"column":57},"end":{"row":17,"column":58}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":58},"end":{"row":17,"column":59}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":59},"end":{"row":17,"column":60}},"text":"r"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":17,"column":36},"end":{"row":17,"column":36},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":26,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1407772763698,"hash":"1057ecb7de3a56c81fbc6fdd0a57a85e4b767b8b"}