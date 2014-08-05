{"filter":false,"title":"countdown-promotion.js","tooltip":"/models/countdown-promotion.js","undoManager":{"mark":8,"position":8,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":40}},"text":"models['countdown-promo'] = (function(){"},{"action":"insertText","range":{"start":{"row":0,"column":40},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":51,"column":0}},"lines":["    ","    var data = {};","    ","    function fetch(callback) {","","        AnalyticsViewProvider.getCountdownPromotion(","            ","            function (result, event) {","                ","                data['original'] = result.sales;","                data['lastweek'] = _.where(result.sales, { 'week': '2014-31' })","","                callback(event.status);","                    ","            }, { escape: true }","                ","        );","        ","    }","    ","    function groupByOwner(dataset, target) {","        ","        var result = {};","        ","        _.chain(data[dataset]).groupBy('owner').each(function(v, k) {","            result[k] = {'owner' : k , 'grossValue' : 0, 'quantity' : 0};","            _.each(v, function(o) { ","                result[k].owner = k;","                result[k].grossValue += o.grossValue;","                result[k].quantity += o.quantity;","            });","        });","        ","        _.chain(result).pluck().each(function(r) {","            r.vsTarget = -r.target + r.grossValue;","            r.vsTargetPercentage = r.grossValue / r.target;","        });","        ","        console.log(result);","        ","        return result;","","    }","    ","    return { fetch : fetch,","         getData : function(dataset) { return data[dataset]; },","         groupByOwner : groupByOwner,","         isFetched : function() { return fetched; }","    };","    "]},{"action":"insertText","range":{"start":{"row":51,"column":0},"end":{"row":51,"column":5}},"text":"}());"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":23},"end":{"row":0,"column":24}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":24},"end":{"row":0,"column":25}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":25},"end":{"row":0,"column":26}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":26},"end":{"row":0,"column":27}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":23},"end":{"row":0,"column":24}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":23},"end":{"row":0,"column":24}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":23},"end":{"row":0,"column":24}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":23},"end":{"row":0,"column":24}},"text":"n"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":12},"end":{"row":7,"column":12},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1407232156910,"hash":"7c04dcd58c024ac7ce54053e3b6f03c07c208761"}