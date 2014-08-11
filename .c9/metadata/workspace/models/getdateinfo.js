{"filter":false,"title":"getdateinfo.js","tooltip":"/models/getdateinfo.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":9},"end":{"row":7,"column":10}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":10},"end":{"row":7,"column":11}},"text":"D"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":11},"end":{"row":7,"column":12}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":12},"end":{"row":7,"column":13}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":13},"end":{"row":7,"column":14}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":14},"end":{"row":7,"column":15}},"text":"I"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":15},"end":{"row":7,"column":16}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":16},"end":{"row":7,"column":17}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":17},"end":{"row":7,"column":18}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":11},"end":{"row":0,"column":16}},"text":"NLOAD"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":11}},"text":"O"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":11}},"text":"G"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":11},"end":{"row":0,"column":12}},"text":"E"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":12},"end":{"row":0,"column":13}},"text":"T"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":13},"end":{"row":0,"column":14}},"text":"D"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":14},"end":{"row":0,"column":15}},"text":"A"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":15},"end":{"row":0,"column":16}},"text":"T"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":16},"end":{"row":0,"column":17}},"text":"E"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":17},"end":{"row":0,"column":18}},"text":"I"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":18},"end":{"row":0,"column":19}},"text":"N"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":19},"end":{"row":0,"column":20}},"text":"D"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":19},"end":{"row":0,"column":20}},"text":"D"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":19},"end":{"row":0,"column":20}},"text":"F"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":20},"end":{"row":0,"column":21}},"text":"O"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":34},"end":{"row":10,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":34},"end":{"row":9,"column":35}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":34},"end":{"row":9,"column":35}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":34},"end":{"row":9,"column":35}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":34},"end":{"row":9,"column":35}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":34},"end":{"row":9,"column":35}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":34},"end":{"row":9,"column":35}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":34},"end":{"row":9,"column":35}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":34},"end":{"row":9,"column":35}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":33},"end":{"row":8,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":8},"end":{"row":8,"column":43}},"text":"        var id = 'a0Mb0000005LPl4';"},{"action":"insertText","range":{"start":{"row":8,"column":43},"end":{"row":9,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":9,"column":0},"end":{"row":41,"column":0}},"lines":["    ","        function fetch() {","            ","            var deferred = Q.defer();","","            AnalyticsViewProvider.getDateInfo(","                ","                function (result, event) {","                    ","                    if (!event.status) {","                        ","                        deferred.reject(false);","                        ","                    } else {","    ","                        _modpriv.datesByIndex = _.chain(result.dates).map(function(d) { return [d.dateIndex, d]; }).object().value();","                        _modpriv.datesByDate = _.chain(result.dates).map(function(d) { return [d.cyDate, d]; }).object().value();","                        ","                        deferred.resolve(true);","                        ","                    }","","                }, { escape: true }","                    ","            );","            ","            return deferred.promise;","","        }","            ","        return {","            fetch : fetch"]},{"action":"insertText","range":{"start":{"row":41,"column":0},"end":{"row":41,"column":10}},"text":"        };"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":12},"end":{"row":8,"column":16}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":8},"end":{"row":8,"column":12}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":4},"end":{"row":8,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":4},"end":{"row":8,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":8},"end":{"row":9,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":26}},"text":"        function fetch() {"},{"action":"removeLines","range":{"start":{"row":10,"column":0},"end":{"row":11,"column":0}},"nl":"\n","lines":["    "]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":12}},"text":"            "},{"action":"removeLines","range":{"start":{"row":10,"column":0},"end":{"row":11,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":36,"column":0},"end":{"row":36,"column":9}},"text":"        }"},{"action":"removeLines","range":{"start":{"row":35,"column":0},"end":{"row":36,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":39,"column":0},"end":{"row":39,"column":10}},"text":"        };"},{"action":"removeLines","range":{"start":{"row":35,"column":0},"end":{"row":39,"column":0}},"nl":"\n","lines":["","            ","        return {","            fetch : fetch"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":36,"column":8},"end":{"row":37,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":37,"column":0},"end":{"row":37,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":37,"column":8},"end":{"row":37,"column":9}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":37,"column":9},"end":{"row":37,"column":10}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":72,"column":8},"end":{"row":72,"column":9}},"text":"*"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":72,"column":9},"end":{"row":72,"column":10}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":8},"end":{"row":11,"column":12}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":12,"column":0},"end":{"row":13,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":0},"end":{"row":16,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":0},"end":{"row":16,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":17,"column":0},"end":{"row":17,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":18,"column":0},"end":{"row":18,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":20,"column":0},"end":{"row":20,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":22,"column":0},"end":{"row":22,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":0},"end":{"row":23,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":23,"column":0},"end":{"row":23,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":24,"column":0},"end":{"row":24,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":25,"column":0},"end":{"row":25,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":26,"column":0},"end":{"row":26,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":27,"column":0},"end":{"row":27,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":28,"column":0},"end":{"row":29,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":29,"column":0},"end":{"row":29,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":30,"column":0},"end":{"row":30,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":31,"column":0},"end":{"row":31,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":31,"column":0},"end":{"row":31,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":32,"column":0},"end":{"row":32,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":30,"column":0},"end":{"row":30,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":12,"column":4},"end":{"row":13,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":4},"end":{"row":13,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":4},"end":{"row":15,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":4},"end":{"row":16,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":15,"column":4},"end":{"row":15,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":17,"column":8},"end":{"row":17,"column":12}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":24,"column":12},"end":{"row":24,"column":16}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":29,"column":12},"end":{"row":29,"column":16}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":31,"column":8},"end":{"row":31,"column":12}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":71,"column":0},"end":{"row":71,"column":10}},"text":"        */"},{"action":"removeLines","range":{"start":{"row":34,"column":0},"end":{"row":71,"column":0}},"nl":"\n","lines":["","        ","        /*","        var id = 'a0Mb0000005LPl4';","    ","        function fetch() {","            ","            var deferred = Q.defer();","","            AnalyticsViewProvider.getDateInfo(","                ","                function (result, event) {","                    ","                    if (!event.status) {","                        ","                        deferred.reject(false);","                        ","                    } else {","    ","                        _modpriv.datesByIndex = _.chain(result.dates).map(function(d) { return [d.dateIndex, d]; }).object().value();","                        _modpriv.datesByDate = _.chain(result.dates).map(function(d) { return [d.cyDate, d]; }).object().value();","                        ","                        deferred.resolve(true);","                        ","                    }","","                }, { escape: true }","                    ","            );","            ","            return deferred.promise;","","        }","            ","        return {","            fetch : fetch","        };"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":34,"column":0},"end":{"row":35,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":33,"column":32},"end":{"row":34,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":34,"column":0},"end":{"row":34,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":34},"end":{"row":9,"column":35}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":34},"end":{"row":9,"column":35}},"text":","}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":11},"end":{"row":11,"column":12}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":10},"end":{"row":11,"column":11}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":9},"end":{"row":11,"column":10}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":8},"end":{"row":11,"column":9}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":4},"end":{"row":11,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":10,"column":0},"end":{"row":11,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":35},"end":{"row":10,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":9,"column":35},"end":{"row":10,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":8}},"text":"        "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":8},"end":{"row":10,"column":12}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":10,"column":32},"end":{"row":11,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":12}},"text":"            "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":8},"end":{"row":11,"column":12}},"text":"    "}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":31},"end":{"row":7,"column":31},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1407750123021,"hash":"7996dcaf6923e8aaa19781e647a0fce8eabc4d87"}