{"filter":false,"title":"_m_historicalSalesByParent.js","tooltip":"/models/_m_historicalSalesByParent.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":81,"column":44},"end":{"row":81,"column":45}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":81,"column":45},"end":{"row":81,"column":46}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":81,"column":46},"end":{"row":81,"column":47}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":81,"column":47},"end":{"row":81,"column":48}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":81,"column":48},"end":{"row":81,"column":49}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":81,"column":49},"end":{"row":81,"column":50}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":81,"column":50},"end":{"row":81,"column":51}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":82,"column":34},"end":{"row":82,"column":51}},"text":" p.2011 - p.2010;"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":83,"column":34},"end":{"row":83,"column":51}},"text":" p.2011 - p.2010;"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":84,"column":34},"end":{"row":84,"column":51}},"text":" p.2011 - p.2010;"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":82,"column":40},"end":{"row":82,"column":41}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":82,"column":40},"end":{"row":82,"column":41}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":83,"column":40},"end":{"row":83,"column":41}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":83,"column":40},"end":{"row":83,"column":41}},"text":"3"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":84,"column":40},"end":{"row":84,"column":41}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":84,"column":40},"end":{"row":84,"column":41}},"text":"4"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":82,"column":49},"end":{"row":82,"column":50}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":82,"column":49},"end":{"row":82,"column":50}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":83,"column":49},"end":{"row":83,"column":50}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":83,"column":49},"end":{"row":83,"column":50}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":84,"column":49},"end":{"row":84,"column":50}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":84,"column":49},"end":{"row":84,"column":50}},"text":"3"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":100,"column":0},"end":{"row":100,"column":35}},"text":"                p.2014vsPrevious = "},{"action":"removeLines","range":{"start":{"row":85,"column":0},"end":{"row":100,"column":0}},"nl":"\n","lines":["                ","                ","                switch (v.year) {","                    case 2010:","                        ","                }","                ","                p.2010 += v.year === 2010 ? grossValue : 0;","                p.2011 += v.year === 2011 ? grossValue : 0; ","                p.2012 += v.year === 2012 ? grossValue : 0; ","                p.2013 += v.year === 2013 ? grossValue : 0;","                p.2014 += v.year === 2014 ? grossValue : 0;","                p.2011vsPrevious = ","                p.2012vsPrevious = ","                p.2013vsPrevious = "]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":85,"column":0},"end":{"row":86,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":84,"column":52},"end":{"row":85,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":85,"column":0},"end":{"row":85,"column":16}},"text":"                "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":77,"column":45},"end":{"row":78,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":78,"column":0},"end":{"row":78,"column":16}},"text":"                "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":94,"column":0},"end":{"row":94,"column":25}},"text":"                return p;"},{"action":"removeLines","range":{"start":{"row":91,"column":0},"end":{"row":94,"column":0}},"nl":"\n","lines":["                p.count--;","                if (v.recordType === 'Headline') p.Headline -= v.thisYearValue;","                if (v.recordType === 'Threat') p.Threat -= v.thisYearValue;"]},{"action":"insertText","range":{"start":{"row":91,"column":0},"end":{"row":91,"column":26}},"text":"                p.count++;"},{"action":"insertText","range":{"start":{"row":91,"column":26},"end":{"row":92,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":92,"column":0},"end":{"row":99,"column":0}},"lines":["                p[v.year] += v.grossValue;","                ","                p.2011vsPrevious = p.2011 - p.2010;","                p.2012vsPrevious = p.2012 - p.2011; ","                p.2013vsPrevious = p.2013 - p.2012; ","                p.2014vsPrevious = p.2014 - p.2013; ","                "]},{"action":"insertText","range":{"start":{"row":99,"column":0},"end":{"row":99,"column":25}},"text":"                return p;"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":90,"column":50},"end":{"row":91,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":91,"column":0},"end":{"row":91,"column":16}},"text":"                "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":92,"column":24},"end":{"row":92,"column":25}},"text":"+"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":92,"column":23},"end":{"row":92,"column":24}},"text":"+"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":23},"end":{"row":92,"column":24}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":92,"column":24},"end":{"row":92,"column":25}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":93,"column":26},"end":{"row":93,"column":27}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":93,"column":27},"end":{"row":93,"column":28}},"text":"+"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":24},"end":{"row":73,"column":25}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":25},"end":{"row":73,"column":26}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":26},"end":{"row":73,"column":27}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":27},"end":{"row":73,"column":28}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":28},"end":{"row":73,"column":29}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":29},"end":{"row":73,"column":30}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":30},"end":{"row":73,"column":31}},"text":"A"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":31},"end":{"row":73,"column":32}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":32},"end":{"row":73,"column":33}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":33},"end":{"row":73,"column":34}},"text":"B"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":34},"end":{"row":73,"column":35}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":35},"end":{"row":73,"column":36}},"text":"Y"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":36},"end":{"row":73,"column":37}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":37},"end":{"row":73,"column":38}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":38},"end":{"row":73,"column":39}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":39},"end":{"row":73,"column":40}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":40},"end":{"row":73,"column":41}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":41},"end":{"row":73,"column":42}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":42},"end":{"row":73,"column":43}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":43},"end":{"row":73,"column":44}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":44},"end":{"row":73,"column":45}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":45},"end":{"row":73,"column":46}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":46},"end":{"row":73,"column":47}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":47},"end":{"row":73,"column":48}},"text":"S"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":48},"end":{"row":73,"column":49}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":24},"end":{"row":73,"column":25}},"text":"_"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":42},"end":{"row":73,"column":43}},"text":"_"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":51},"end":{"row":73,"column":52}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":73,"column":42},"end":{"row":73,"column":52}},"text":"_reduceSub"},{"action":"insertText","range":{"start":{"row":73,"column":42},"end":{"row":73,"column":65}},"text":"_reduceSubtractByYear()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":73,"column":63},"end":{"row":73,"column":65}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":73,"column":63},"end":{"row":73,"column":64}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":63},"end":{"row":73,"column":64}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":64},"end":{"row":73,"column":65}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":65},"end":{"row":73,"column":66}},"text":"_"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":66},"end":{"row":73,"column":67}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":67},"end":{"row":73,"column":68}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":68},"end":{"row":73,"column":69}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":69},"end":{"row":73,"column":70}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":70},"end":{"row":73,"column":71}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":71},"end":{"row":73,"column":72}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":73,"column":65},"end":{"row":73,"column":72}},"text":"_reduce"},{"action":"insertText","range":{"start":{"row":73,"column":65},"end":{"row":73,"column":90}},"text":"_reduceInitialiseByYear()"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":73,"column":89},"end":{"row":73,"column":90}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":73,"column":88},"end":{"row":73,"column":89}},"text":"("}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":88},"end":{"row":73,"column":89}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":73,"column":89},"end":{"row":73,"column":90}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":19,"column":39},"end":{"row":20,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":20,"column":0},"end":{"row":20,"column":16}},"text":"                "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":16},"end":{"row":21,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":21,"column":0},"end":{"row":21,"column":16}},"text":"                "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":16},"end":{"row":21,"column":17}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":17},"end":{"row":21,"column":18}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":18},"end":{"row":21,"column":19}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":19},"end":{"row":21,"column":20}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":20},"end":{"row":21,"column":21}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":21},"end":{"row":21,"column":22}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":22},"end":{"row":21,"column":23}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":23},"end":{"row":21,"column":24}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":24},"end":{"row":21,"column":25}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":25},"end":{"row":21,"column":26}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":26},"end":{"row":21,"column":27}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":27},"end":{"row":21,"column":29}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":28},"end":{"row":21,"column":29}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":29},"end":{"row":21,"column":30}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":30},"end":{"row":21,"column":31}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":31},"end":{"row":21,"column":32}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":32},"end":{"row":21,"column":33}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":33},"end":{"row":21,"column":34}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":34},"end":{"row":21,"column":35}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":36},"end":{"row":21,"column":37}},"text":";"}]}]]},"ace":{"folds":[],"scrolltop":60,"scrollleft":0,"selection":{"start":{"row":21,"column":37},"end":{"row":21,"column":37},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1410870371206,"hash":"a74b7939722c67afb8e432934974f606f52e43c3"}