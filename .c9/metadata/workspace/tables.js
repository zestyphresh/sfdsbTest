{"filter":false,"title":"tables.js","tooltip":"/tables.js","undoManager":{"mark":40,"position":40,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":26}},"text":"var tables = (function() {"},{"action":"insertText","range":{"start":{"row":0,"column":26},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":42,"column":0}},"lines":["    ","   HeadlineOpportunities = function(id, data) {","            ","        var table = $j('#' + id).DataTable({","            'data' : data,","            'order' : [[ 1, 'desc' ]],","            'paging' : false,","            'info' : false, ","            'searching' : false,","            'columns' : [{\"data\": \"account\", \"title\": \"Account\"}, ","                        {\"data\": \"recordType\", \"title\": \"Type\"},","                        {\"data\": \"name\", \"title\": \"Name\"},","                        {\"data\": \"stage\", \"title\": \"Stage\"},","                        {\"data\": \"isoValue\", \"title\": \"ISO\"}, ","                        {\"data\": \"annualisedValue\", \"title\": \"Annualised\"}, ","                        {\"data\": \"weeklyValue\", \"title\": \"Weekly\"},","                        {\"data\": \"closeDate\", \"title\": \"Date\"},","                        {\"data\": \"productCategory\", \"title\": \"Category\"}","            ],","            'columnDefs' : [returnDef([4,5,6], '$0,0', 'alignRight')],","            'footerCallback' : function (tfoot, data, start, end, display) {","                var api = this.api();","","                var totalISO = api.column(4).data().reduce(function (a, b) { return a + b; });","                var totalAnnualised = api.column(5).data().reduce(function (a, b) { return a + b; });","                var totalWeekly = api.column(6).data().reduce(function (a, b) { return a + b; });","                    ","                $j(api.column(0).footer()).html('Total');","                $j(api.column(4).footer()).html(numeral(totalISO).format('$0,0'));","                $j(api.column(5).footer()).html(numeral(totalAnnualised).format('$0,0'));","                $j(api.column(6).footer()).html(numeral(totalWeekly).format('$0,0'));","            }","        })","    ","        function reload(data) { table.clear().rows.add(data).draw(); };","","        return { reload : reload };  ","                                ","    };","","}());"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":10},"end":{"row":33,"column":11}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":35,"column":70},"end":{"row":35,"column":71}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":6},"end":{"row":40,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":40,"column":0},"end":{"row":40,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":40,"column":4},"end":{"row":41,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":41,"column":0},"end":{"row":41,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":4},"end":{"row":41,"column":5}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":5},"end":{"row":41,"column":6}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":6},"end":{"row":41,"column":7}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":7},"end":{"row":41,"column":8}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":8},"end":{"row":41,"column":9}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":9},"end":{"row":41,"column":10}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":10},"end":{"row":41,"column":11}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":11},"end":{"row":41,"column":12}},"text":"{"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":12},"end":{"row":42,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":42,"column":0},"end":{"row":43,"column":0}},"lines":["        "]},{"action":"insertText","range":{"start":{"row":43,"column":0},"end":{"row":43,"column":5}},"text":"    }"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":8},"end":{"row":42,"column":9}},"text":"H"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":9},"end":{"row":42,"column":10}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":10},"end":{"row":42,"column":11}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":11},"end":{"row":42,"column":12}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":12},"end":{"row":42,"column":13}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":13},"end":{"row":42,"column":14}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":14},"end":{"row":42,"column":15}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":15},"end":{"row":42,"column":16}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":8},"end":{"row":42,"column":16}},"text":"Headline"},{"action":"insertText","range":{"start":{"row":42,"column":8},"end":{"row":42,"column":29}},"text":"HeadlineOpportunities"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":29},"end":{"row":42,"column":30}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":30},"end":{"row":42,"column":31}},"text":":"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":31},"end":{"row":42,"column":32}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":32},"end":{"row":42,"column":33}},"text":"H"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":33},"end":{"row":42,"column":34}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":34},"end":{"row":42,"column":35}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":32},"end":{"row":42,"column":35}},"text":"Hea"},{"action":"insertText","range":{"start":{"row":42,"column":32},"end":{"row":42,"column":55}},"text":"HeadlineOpportunities()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":53},"end":{"row":42,"column":55}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":53},"end":{"row":43,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":53},"end":{"row":42,"column":54}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":53},"end":{"row":42,"column":54}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":53},"end":{"row":42,"column":54}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":53},"end":{"row":42,"column":54}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":53},"end":{"row":43,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":43,"column":0},"end":{"row":44,"column":0}},"lines":["        "]},{"action":"insertText","range":{"start":{"row":44,"column":0},"end":{"row":44,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":43,"column":8},"end":{"row":44,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":43,"column":8},"end":{"row":43,"column":12}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":43,"column":4},"end":{"row":43,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":43,"column":5},"end":{"row":43,"column":6}},"text":";"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":13,"column":43},"end":{"row":13,"column":43},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1406720487905,"hash":"4737f27c1eea44f6f7c352b9aa4daa72715a69cd"}