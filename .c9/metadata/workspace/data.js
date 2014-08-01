{"filter":false,"title":"data.js","tooltip":"/data.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":8},"end":{"row":0,"column":9}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":9},"end":{"row":0,"column":10}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":11}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":11},"end":{"row":0,"column":12}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":12},"end":{"row":0,"column":14}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":13},"end":{"row":0,"column":14}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":14},"end":{"row":0,"column":15}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":15},"end":{"row":0,"column":16}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":16},"end":{"row":0,"column":17}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":17},"end":{"row":0,"column":18}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":18},"end":{"row":0,"column":19}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":19},"end":{"row":0,"column":20}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":20},"end":{"row":0,"column":21}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":21},"end":{"row":0,"column":23}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":23},"end":{"row":0,"column":24}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":24},"end":{"row":0,"column":26}},"text":"{}"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":25},"end":{"row":0,"column":26}},"text":"}"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":25},"end":{"row":0,"column":26}},"text":"}"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":27},"end":{"row":0,"column":29}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":29},"end":{"row":0,"column":30}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":30},"end":{"row":0,"column":31}},"text":":"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":30},"end":{"row":0,"column":31}},"text":":"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":30},"end":{"row":0,"column":31}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":25},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":2,"column":0}},"lines":["    "]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":1},"end":{"row":2,"column":2}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":25},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":1,"column":0},"end":{"row":1,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":4},"end":{"row":2,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":4},"end":{"row":3,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":4},"end":{"row":4,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":25},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":1,"column":0},"end":{"row":1,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":4},"end":{"row":2,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":4},"end":{"row":2,"column":34}},"text":"    function fetch(callback) {"},{"action":"insertText","range":{"start":{"row":2,"column":34},"end":{"row":3,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":3,"column":0},"end":{"row":24,"column":0}},"lines":["        ","        console.log('in fetch');","            ","        AnalyticsDataProvider.getHeadlineOpportunityTimeline(","            ","            function (result, event) {","            ","                var success = !event.status || !result.length > 0 ? false : true; ","","                //In place to filter while testing","                var testData = result.opps.slice(0,20);","                ","                data.push(testData.opps);","                dataWeeks.push(dataTransformToWeeks(testData.opps));","                ","                callback(success);","                    ","            }, { escape: true }","                ","        );","        "]},{"action":"insertText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":5}},"text":"    }"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":4},"end":{"row":2,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":32}},"text":"        console.log('in fetch');"},{"action":"removeLines","range":{"start":{"row":3,"column":0},"end":{"row":4,"column":0}},"nl":"\n","lines":["        "]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":12}},"text":"            "},{"action":"removeLines","range":{"start":{"row":3,"column":0},"end":{"row":4,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":17},"end":{"row":4,"column":21}},"text":"Data"},{"action":"insertText","range":{"start":{"row":4,"column":17},"end":{"row":4,"column":18}},"text":"B"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":17},"end":{"row":4,"column":18}},"text":"B"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":17},"end":{"row":4,"column":18}},"text":"V"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":18},"end":{"row":4,"column":19}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":19},"end":{"row":4,"column":20}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":20},"end":{"row":4,"column":21}},"text":"w"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":33},"end":{"row":4,"column":60}},"text":"HeadlineOpportunityTimeline"},{"action":"insertText","range":{"start":{"row":4,"column":33},"end":{"row":4,"column":34}},"text":"D"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":34},"end":{"row":4,"column":35}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":35},"end":{"row":4,"column":36}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":36},"end":{"row":4,"column":37}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":37},"end":{"row":4,"column":38}},"text":"I"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":38},"end":{"row":4,"column":39}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":39},"end":{"row":4,"column":40}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":40},"end":{"row":4,"column":41}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":42},"end":{"row":11,"column":43}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":43},"end":{"row":11,"column":44}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":44},"end":{"row":11,"column":45}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":45},"end":{"row":11,"column":46}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":46},"end":{"row":11,"column":47}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":41},"end":{"row":11,"column":42}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":40},"end":{"row":11,"column":41}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":39},"end":{"row":11,"column":40}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":38},"end":{"row":11,"column":39}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":43},"end":{"row":11,"column":55}},"text":".slice(0,20)"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":68}},"text":"                dataWeeks.push(dataTransformToWeeks(testData.opps));"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":16}},"text":"                "},{"action":"removeLines","range":{"start":{"row":14,"column":0},"end":{"row":15,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":1,"column":0},"end":{"row":1,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":0,"column":25},"end":{"row":1,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":25},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":1,"column":0},"end":{"row":1,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":4},"end":{"row":2,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":4},"end":{"row":3,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":4},"end":{"row":2,"column":5}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":5},"end":{"row":2,"column":6}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":6},"end":{"row":2,"column":7}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":7},"end":{"row":2,"column":8}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":8},"end":{"row":2,"column":9}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":9},"end":{"row":2,"column":10}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":10},"end":{"row":2,"column":11}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":11},"end":{"row":2,"column":12}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":12},"end":{"row":2,"column":13}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":13},"end":{"row":2,"column":14}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":14},"end":{"row":2,"column":15}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":15},"end":{"row":2,"column":17}},"text":"[]"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":17},"end":{"row":2,"column":18}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":23,"column":5},"end":{"row":24,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":23,"column":5},"end":{"row":24,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":23,"column":5},"end":{"row":24,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":23,"column":5},"end":{"row":24,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":4}},"text":"    "},{"action":"removeText","range":{"start":{"row":23,"column":5},"end":{"row":24,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":5},"end":{"row":24,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":49,"column":17},"end":{"row":49,"column":21}},"text":"Data"},{"action":"insertText","range":{"start":{"row":49,"column":17},"end":{"row":49,"column":18}},"text":"V"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":49,"column":18},"end":{"row":49,"column":19}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":49,"column":19},"end":{"row":49,"column":20}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":49,"column":20},"end":{"row":49,"column":21}},"text":"w"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":25,"column":5},"end":{"row":26,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":25,"column":5},"end":{"row":26,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":25,"column":5},"end":{"row":26,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":25,"column":5},"end":{"row":26,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":25,"column":5},"end":{"row":26,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":23,"column":5},"end":{"row":24,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":24,"column":4},"end":{"row":25,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":25,"column":0},"end":{"row":25,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":25,"column":4},"end":{"row":25,"column":32}},"text":"    return { fetch : fetch, "},{"action":"insertText","range":{"start":{"row":25,"column":32},"end":{"row":26,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":26,"column":0},"end":{"row":28,"column":0}},"lines":["             getData : getData,","             getDataWeeks : getDataWeeks"]},{"action":"insertText","range":{"start":{"row":28,"column":0},"end":{"row":28,"column":6}},"text":"    };"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":25,"column":4},"end":{"row":25,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":27,"column":0},"end":{"row":27,"column":40}},"text":"             getDataWeeks : getDataWeeks"},{"action":"removeLines","range":{"start":{"row":26,"column":0},"end":{"row":27,"column":0}},"nl":"\n","lines":["             getData : getData,"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":25,"column":28},"end":{"row":26,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":25,"column":27},"end":{"row":25,"column":28}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":25,"column":26},"end":{"row":25,"column":27}},"text":","}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":20,"column":16},"end":{"row":20,"column":16},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1406897398308,"hash":"cdcae2f7dbeeaacb13beb78351ec3c6c8198ba13"}