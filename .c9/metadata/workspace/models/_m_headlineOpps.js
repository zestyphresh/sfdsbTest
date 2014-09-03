{"filter":false,"title":"_m_headlineOpps.js","tooltip":"/models/_m_headlineOpps.js","undoManager":{"mark":52,"position":52,"stack":[[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":46}},"text":"            _uid = _.uniqueId(_modelId + '-'),"},{"action":"removeText","range":{"start":{"row":7,"column":12},"end":{"row":7,"column":41}},"text":"_modelId = 'a0Mb0000005LPl5',"},{"action":"removeText","range":{"start":{"row":7,"column":12},"end":{"row":8,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":12},"end":{"row":8,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":12},"end":{"row":7,"column":16}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":12},"end":{"row":7,"column":16}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":12},"end":{"row":7,"column":16}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":22},"end":{"row":0,"column":32}},"text":"ORTUNITIES"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":22},"end":{"row":0,"column":23}},"text":"S"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":13,"column":34},"end":{"row":14,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":12}},"text":"            "},{"action":"insertText","range":{"start":{"row":14,"column":12},"end":{"row":15,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":12}},"text":"            "},{"action":"insertText","range":{"start":{"row":15,"column":12},"end":{"row":15,"column":49}},"text":"            var deferred = Q.defer();"},{"action":"insertText","range":{"start":{"row":15,"column":49},"end":{"row":16,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":16,"column":0},"end":{"row":37,"column":0}},"lines":["            ","            Q.all([_remote('Homebase')]).done(function(results) {","","                _.each(results, function(v) {","                    ","                    _onFetchDataChanges(v);","                    ","                    _data.add(v);","                    ","                });","","                _createDims();","                ","                _createGroups();","                ","                console.log(dims.dummy.top(Infinity));","                ","                deferred.resolve(true);","                ","            });",""]},{"action":"insertText","range":{"start":{"row":37,"column":0},"end":{"row":37,"column":36}},"text":"            return deferred.promise;"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":22},"end":{"row":15,"column":23}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":21},"end":{"row":15,"column":22}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":20},"end":{"row":15,"column":21}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":16},"end":{"row":15,"column":20}},"text":"    "},{"action":"removeText","range":{"start":{"row":15,"column":12},"end":{"row":15,"column":16}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":8},"end":{"row":15,"column":12}},"text":"    "},{"action":"removeText","range":{"start":{"row":15,"column":4},"end":{"row":15,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":4},"end":{"row":15,"column":5}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":4},"end":{"row":15,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":8},"end":{"row":15,"column":12}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":67,"column":0},"end":{"row":67,"column":36}},"text":"            return deferred.promise;"},{"action":"removeLines","range":{"start":{"row":40,"column":0},"end":{"row":67,"column":0}},"nl":"\n","lines":["","            AnalyticsDataProvider.getHeadlineOpportunities(","                ","                function (result, event) {","                    ","                    if (!event.status) {","                        ","                        deferred.reject(false);","                        ","                    } else {","                        ","                        _onFetchDataChanges(result);","                        ","                        _data.add(result);","                        ","                        _createDims();","                        ","                        _createGroups();","","                        deferred.resolve(true);","                        ","                    }","","                }, { escape: true }","                    ","            );","            "]},{"action":"removeText","range":{"start":{"row":39,"column":1},"end":{"row":39,"column":37}},"text":"           var deferred = Q.defer();"},{"action":"removeText","range":{"start":{"row":39,"column":1},"end":{"row":40,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":39,"column":0},"end":{"row":39,"column":1}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":12},"end":{"row":39,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":8},"end":{"row":38,"column":12}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":4},"end":{"row":38,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":0},"end":{"row":38,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":37,"column":36},"end":{"row":38,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":31,"column":0},"end":{"row":31,"column":54}},"text":"                console.log(dims.dummy.top(Infinity));"},{"action":"removeLines","range":{"start":{"row":30,"column":0},"end":{"row":31,"column":0}},"nl":"\n","lines":["                "]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":29,"column":32},"end":{"row":30,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":19},"end":{"row":17,"column":38}},"text":"_remote('Homebase')"},{"action":"insertText","range":{"start":{"row":17,"column":19},"end":{"row":17,"column":20}},"text":"_"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":20},"end":{"row":17,"column":21}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":21},"end":{"row":17,"column":22}},"text":"p"},{"action":"insertText","range":{"start":{"row":17,"column":22},"end":{"row":17,"column":23}},"text":"o"},{"action":"insertText","range":{"start":{"row":17,"column":23},"end":{"row":17,"column":24}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":23},"end":{"row":17,"column":24}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":22},"end":{"row":17,"column":23}},"text":"o"},{"action":"removeText","range":{"start":{"row":17,"column":21},"end":{"row":17,"column":22}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":20},"end":{"row":17,"column":21}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":19},"end":{"row":17,"column":20}},"text":"_"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":19},"end":{"row":17,"column":20}},"text":"D"},{"action":"insertText","range":{"start":{"row":17,"column":20},"end":{"row":17,"column":21}},"text":"A"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":21},"end":{"row":17,"column":22}},"text":"T"},{"action":"insertText","range":{"start":{"row":17,"column":22},"end":{"row":17,"column":23}},"text":"A"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":23},"end":{"row":17,"column":24}},"text":"_"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":24},"end":{"row":17,"column":25}},"text":"R"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":25},"end":{"row":17,"column":26}},"text":"E"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":26},"end":{"row":17,"column":27}},"text":"M"},{"action":"insertText","range":{"start":{"row":17,"column":27},"end":{"row":17,"column":28}},"text":"O"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":28},"end":{"row":17,"column":29}},"text":"T"},{"action":"insertText","range":{"start":{"row":17,"column":29},"end":{"row":17,"column":30}},"text":"I"},{"action":"insertText","range":{"start":{"row":17,"column":30},"end":{"row":17,"column":31}},"text":"N"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":31},"end":{"row":17,"column":32}},"text":"G"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":32},"end":{"row":17,"column":33}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":33},"end":{"row":17,"column":34}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":34},"end":{"row":17,"column":35}},"text":"p"},{"action":"insertText","range":{"start":{"row":17,"column":35},"end":{"row":17,"column":36}},"text":"o"},{"action":"insertText","range":{"start":{"row":17,"column":36},"end":{"row":17,"column":37}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":36},"end":{"row":17,"column":37}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":35},"end":{"row":17,"column":36}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":34},"end":{"row":17,"column":35}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":33},"end":{"row":17,"column":34}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":33},"end":{"row":17,"column":34}},"text":"h"},{"action":"insertText","range":{"start":{"row":17,"column":34},"end":{"row":17,"column":35}},"text":"e"},{"action":"insertText","range":{"start":{"row":17,"column":35},"end":{"row":17,"column":36}},"text":"a"},{"action":"insertText","range":{"start":{"row":17,"column":36},"end":{"row":17,"column":37}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":33},"end":{"row":17,"column":37}},"text":"head"},{"action":"insertText","range":{"start":{"row":17,"column":33},"end":{"row":17,"column":45}},"text":"headlineOpps"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":45},"end":{"row":17,"column":47}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":19},"end":{"row":18,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":18,"column":0},"end":{"row":18,"column":16}},"text":"                "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":44},"end":{"row":19,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":16}},"text":"                "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":19,"column":12},"end":{"row":19,"column":16}},"text":"    "}]}]]},"ace":{"folds":[],"scrolltop":60,"scrollleft":0,"selection":{"start":{"row":23,"column":43},"end":{"row":23,"column":43},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":2,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1409735228720,"hash":"d9f096d3a9bc4e00addd5b4109d3c1ea847a211c"}