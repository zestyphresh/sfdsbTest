{"filter":false,"title":"templates.js","tooltip":"/templates.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":29,"column":48},"end":{"row":29,"column":49}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":29,"column":49},"end":{"row":29,"column":50}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":29,"column":50},"end":{"row":29,"column":51}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":29,"column":51},"end":{"row":29,"column":52}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":29,"column":52},"end":{"row":29,"column":53}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":29,"column":53},"end":{"row":29,"column":54}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":29,"column":54},"end":{"row":29,"column":55}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":29,"column":55},"end":{"row":29,"column":56}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":29,"column":56},"end":{"row":29,"column":57}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":29,"column":57},"end":{"row":29,"column":58}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":29,"column":58},"end":{"row":29,"column":59}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":170,"column":1},"end":{"row":171,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":171,"column":0},"end":{"row":172,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":172,"column":0},"end":{"row":172,"column":42}},"text":"_templates['headline-opportunities'] = \"\"+"},{"action":"insertText","range":{"start":{"row":172,"column":42},"end":{"row":173,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":173,"column":0},"end":{"row":273,"column":0}},"lines":["        \"<div class='row'>\"+","        \"\"+    ","        \"    <div class='col-xs-12 col-md-3'>\"+","        \"        <div class='panel panel-default'>\"+","        \"            <div class='panel-heading'>\" +","        \"                <span>Filters</span>\" +","        \"            </div>\"+","        \"            <div class='panel-body'>\"+ ","        \"                <div><h5>Sector</h5></div>\"+","        \"                <div id='{{id}}-filters-sector' class='input-group input-append dropdown combobox' data-initialize='combobox'>\"+","        \"                    <input type='text' class='form-control'>\"+","        \"                        <div class='input-group-btn'>\"+","        \"                            <button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown'><span class='caret'></span></button>\"+","        \"                            <ul class='dropdown-menu dropdown-menu-right'>\"+","        \"                                <li data-value='All'><a>All</a></li>\"+","        \"                            </ul>\"+","        \"                        </div>\"+","        \"                </div>\"+","        \"                <div><h5>Salesperson</h5></div>\"+","        \"                <div id='{{id}}-filters-owner' class='input-group input-append dropdown combobox' data-initialize='combobox'>\"+","        \"                    <input type='text' class='form-control'>\"+","        \"                        <div class='input-group-btn'>\"+","        \"                            <button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown'><span class='caret'></span></button>\"+","        \"                            <ul class='dropdown-menu dropdown-menu-right'>\"+","        \"                                <li data-value='All'><a>All</a></li>\"+","        \"                            </ul>\"+","        \"                        </div>\"+","        \"                </div>\"+","        \"            </div>\"+","        \"        </div>\"+ ","        \"    </div>\"+","        \"\"+","        \"    <div class='col-xs-12 col-md-9'>\"+","        \"        <div class='panel panel-default'>\"+","        \"            <div class='panel-heading'>\" +","        \"                <span>Opportunity Summary</span>\" +","        \"                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-tables-opp-summary'><span class='glyphicon glyphicon-plus'></span></a>\" +","        \"            </div>\"+","        \"            <div id='{{id}}-tables-opp-summary' class='table-responsive'></div>\"+","        \"        </div>\"+ ","        \"    </div>\"+","        \"\"+","        \"    <div class='col-xs-12'>\"+","        \"        <div class='panel panel-default'>\"+","        \"            <div class='panel-heading'>\" +","        \"                <span>Opportunity List - Confirmed</span>\" +","        \"                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-tables-opp-list-confirmed'><span class='glyphicon glyphicon-plus'></span></a>\" +","        \"            </div>\"+","        \"            <div id='{{id}}-tables-opp-list-confirmed' class='table-responsive'></div>\"+","        \"        </div>\"+ ","        \"    </div>\"+","        \"\"+    ","        \"    <div class='col-xs-12'>\"+","        \"        <div class='panel panel-default'>\"+","        \"            <div class='panel-heading'>\" +","        \"                <span>Opportunity List - Likley</span>\" +","        \"                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-tables-opp-list-likely'><span class='glyphicon glyphicon-plus'></span></a>\" +","        \"            </div>\"+","        \"            <div id='{{id}}-tables-opp-list-likely' class='table-responsive'></div>\"+","        \"        </div>\"+ ","        \"    </div>\"+","        \"\"+    ","        \"    <div class='col-xs-12'>\"+","        \"        <div class='panel panel-default'>\"+","        \"            <div class='panel-heading'>\" +","        \"                <span>Opportunity List - Open</span>\" +","        \"                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-tables-opp-list-open'><span class='glyphicon glyphicon-plus'></span></a>\" +","        \"            </div>\"+","        \"            <div id='{{id}}-tables-opp-list-open' class='table-responsive'></div>\"+","        \"        </div>\"+ ","        \"    </div>\"+","        \"\"+    ","        \"    <div class='col-xs-12'>\"+","        \"        <div class='panel panel-default'>\"+","        \"            <div class='panel-heading'>\" +","        \"                <span>Opportunity List - Unlikley</span>\" +","        \"                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-tables-opp-list-unlikley'><span class='glyphicon glyphicon-plus'></span></a>\" +","        \"            </div>\"+","        \"            <div id='{{id}}-tables-opp-list-unlikely' class='table-responsive'></div>\"+","        \"        </div>\"+ ","        \"    </div>\"+","        \"\"+    ","        \"    <div class='col-xs-12'>\"+","        \"        <div class='panel panel-default'>\"+","        \"            <div class='panel-heading'>\" +","        \"                <span>Opportunity List - Lost</span>\" +","        \"                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-tables-opp-list-lost'><span class='glyphicon glyphicon-plus'></span></a>\" +","        \"            </div>\"+","        \"            <div id='{{id}}-tables-opp-list-lost' class='table-responsive'></div>\"+","        \"        </div>\"+ ","        \"    </div>\"+","        \"\"+","        \"    <div class='col-xs-12'>\"+","        \"        <div class='panel panel-default'>\"+","        \"            <div class='panel-heading'>Opportunity Timeline</div>\"+","        \"            <div id='{{id}}-charts-opp-timeline' class='minChartDims3'></div>\"+","        \"        </div>\"+","        \"    </div>\"+","        \"\"+    ","        \"</div>\""]},{"action":"insertText","range":{"start":{"row":273,"column":0},"end":{"row":273,"column":1}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":172,"column":12},"end":{"row":172,"column":34}},"text":"headline-opportunities"},{"action":"insertText","range":{"start":{"row":172,"column":12},"end":{"row":172,"column":13}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":172,"column":13},"end":{"row":172,"column":14}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":172,"column":14},"end":{"row":172,"column":15}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":172,"column":15},"end":{"row":172,"column":16}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":172,"column":16},"end":{"row":172,"column":17}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":172,"column":17},"end":{"row":172,"column":18}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":172,"column":18},"end":{"row":172,"column":19}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":172,"column":19},"end":{"row":172,"column":20}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":172,"column":20},"end":{"row":172,"column":21}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":172,"column":21},"end":{"row":172,"column":22}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":172,"column":22},"end":{"row":172,"column":23}},"text":"x"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":172,"column":23},"end":{"row":172,"column":24}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":172,"column":24},"end":{"row":172,"column":25}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":172,"column":25},"end":{"row":172,"column":26}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":172,"column":26},"end":{"row":172,"column":27}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":172,"column":27},"end":{"row":172,"column":28}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":172,"column":28},"end":{"row":172,"column":29}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":175,"column":42},"end":{"row":175,"column":43}},"text":"3"},{"action":"insertText","range":{"start":{"row":175,"column":42},"end":{"row":175,"column":43}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":175,"column":43},"end":{"row":175,"column":44}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":270,"column":0},"end":{"row":270,"column":21}},"text":"        \"    </div>\"+"},{"action":"removeLines","range":{"start":{"row":244,"column":0},"end":{"row":270,"column":0}},"nl":"\n","lines":["        \"\"+    ","        \"    <div class='col-xs-12'>\"+","        \"        <div class='panel panel-default'>\"+","        \"            <div class='panel-heading'>\" +","        \"                <span>Opportunity List - Unlikley</span>\" +","        \"                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-tables-opp-list-unlikley'><span class='glyphicon glyphicon-plus'></span></a>\" +","        \"            </div>\"+","        \"            <div id='{{id}}-tables-opp-list-unlikely' class='table-responsive'></div>\"+","        \"        </div>\"+ ","        \"    </div>\"+","        \"\"+    ","        \"    <div class='col-xs-12'>\"+","        \"        <div class='panel panel-default'>\"+","        \"            <div class='panel-heading'>\" +","        \"                <span>Opportunity List - Lost</span>\" +","        \"                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-tables-opp-list-lost'><span class='glyphicon glyphicon-plus'></span></a>\" +","        \"            </div>\"+","        \"            <div id='{{id}}-tables-opp-list-lost' class='table-responsive'></div>\"+","        \"        </div>\"+ ","        \"    </div>\"+","        \"\"+","        \"    <div class='col-xs-12'>\"+","        \"        <div class='panel panel-default'>\"+","        \"            <div class='panel-heading'>Opportunity Timeline</div>\"+","        \"            <div id='{{id}}-charts-opp-timeline' class='minChartDims3'></div>\"+","        \"        </div>\"+"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":225,"column":0},"end":{"row":244,"column":0}},"nl":"\n","lines":["        \"    <div class='col-xs-12'>\"+","        \"        <div class='panel panel-default'>\"+","        \"            <div class='panel-heading'>\" +","        \"                <span>Opportunity List - Likley</span>\" +","        \"                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-tables-opp-list-likely'><span class='glyphicon glyphicon-plus'></span></a>\" +","        \"            </div>\"+","        \"            <div id='{{id}}-tables-opp-list-likely' class='table-responsive'></div>\"+","        \"        </div>\"+ ","        \"    </div>\"+","        \"\"+    ","        \"    <div class='col-xs-12'>\"+","        \"        <div class='panel panel-default'>\"+","        \"            <div class='panel-heading'>\" +","        \"                <span>Opportunity List - Open</span>\" +","        \"                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-tables-opp-list-open'><span class='glyphicon glyphicon-plus'></span></a>\" +","        \"            </div>\"+","        \"            <div id='{{id}}-tables-opp-list-open' class='table-responsive'></div>\"+","        \"        </div>\"+ ","        \"    </div>\"+"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":214,"column":0},"end":{"row":225,"column":0}},"nl":"\n","lines":["        \"\"+","        \"    <div class='col-xs-12'>\"+","        \"        <div class='panel panel-default'>\"+","        \"            <div class='panel-heading'>\" +","        \"                <span>Opportunity List - Confirmed</span>\" +","        \"                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-tables-opp-list-confirmed'><span class='glyphicon glyphicon-plus'></span></a>\" +","        \"            </div>\"+","        \"            <div id='{{id}}-tables-opp-list-confirmed' class='table-responsive'></div>\"+","        \"        </div>\"+ ","        \"    </div>\"+","        \"\"+    "]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":213,"column":21},"end":{"row":214,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":205,"column":42},"end":{"row":205,"column":43}},"text":"9"},{"action":"insertText","range":{"start":{"row":205,"column":42},"end":{"row":205,"column":43}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":205,"column":43},"end":{"row":205,"column":44}},"text":"2"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":208,"column":31},"end":{"row":208,"column":50}},"text":"Opportunity Summary"},{"action":"insertText","range":{"start":{"row":208,"column":31},"end":{"row":208,"column":32}},"text":"A"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":208,"column":32},"end":{"row":208,"column":33}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":208,"column":33},"end":{"row":208,"column":34}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":208,"column":34},"end":{"row":208,"column":35}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":208,"column":35},"end":{"row":208,"column":36}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":208,"column":36},"end":{"row":208,"column":37}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":208,"column":37},"end":{"row":208,"column":38}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":208,"column":38},"end":{"row":208,"column":39}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":208,"column":39},"end":{"row":208,"column":40}},"text":"S"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":208,"column":40},"end":{"row":208,"column":41}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":208,"column":41},"end":{"row":208,"column":42}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":208,"column":42},"end":{"row":208,"column":43}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":208,"column":43},"end":{"row":208,"column":44}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":209,"column":98},"end":{"row":209,"column":101}},"text":"opp"},{"action":"insertText","range":{"start":{"row":209,"column":98},"end":{"row":209,"column":99}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":209,"column":99},"end":{"row":209,"column":100}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":209,"column":100},"end":{"row":209,"column":101}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":209,"column":101},"end":{"row":209,"column":102}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":209,"column":103},"end":{"row":209,"column":110}},"text":"summary"},{"action":"insertText","range":{"start":{"row":209,"column":103},"end":{"row":209,"column":104}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":209,"column":104},"end":{"row":209,"column":105}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":209,"column":105},"end":{"row":209,"column":106}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":209,"column":106},"end":{"row":209,"column":107}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":209,"column":107},"end":{"row":209,"column":108}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":209,"column":110},"end":{"row":209,"column":156}},"text":"<span class='glyphicon glyphicon-plus'></span>"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":209,"column":0},"end":{"row":209,"column":117}},"text":"        \"                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-tables-accs-sales'></a>\" +"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":208,"column":54},"end":{"row":209,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":210,"column":44},"end":{"row":210,"column":47}},"text":"opp"},{"action":"insertText","range":{"start":{"row":210,"column":44},"end":{"row":210,"column":45}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":210,"column":45},"end":{"row":210,"column":46}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":210,"column":46},"end":{"row":210,"column":47}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":210,"column":47},"end":{"row":210,"column":48}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":210,"column":49},"end":{"row":210,"column":50}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":210,"column":49},"end":{"row":210,"column":50}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":210,"column":49},"end":{"row":210,"column":50}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":210,"column":49},"end":{"row":210,"column":50}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":210,"column":49},"end":{"row":210,"column":50}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":210,"column":49},"end":{"row":210,"column":50}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":210,"column":49},"end":{"row":210,"column":50}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":210,"column":49},"end":{"row":210,"column":50}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":210,"column":50},"end":{"row":210,"column":51}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":210,"column":51},"end":{"row":210,"column":52}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":210,"column":52},"end":{"row":210,"column":53}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":210,"column":53},"end":{"row":210,"column":54}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":362,"column":63},"end":{"row":362,"column":64}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":362,"column":64},"end":{"row":363,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":363,"column":0},"end":{"row":363,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":363,"column":4},"end":{"row":363,"column":63}},"text":"'epos-basic' : Handlebars.compile(_templates['epos-basic'])"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":363,"column":5},"end":{"row":363,"column":15}},"text":"epos-basic"},{"action":"insertText","range":{"start":{"row":363,"column":5},"end":{"row":363,"column":6}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":363,"column":6},"end":{"row":363,"column":7}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":363,"column":7},"end":{"row":363,"column":8}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":363,"column":8},"end":{"row":363,"column":9}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":363,"column":9},"end":{"row":363,"column":10}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":363,"column":10},"end":{"row":363,"column":11}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":363,"column":11},"end":{"row":363,"column":12}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":363,"column":12},"end":{"row":363,"column":13}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":363,"column":13},"end":{"row":363,"column":14}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":363,"column":14},"end":{"row":363,"column":15}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":363,"column":15},"end":{"row":363,"column":16}},"text":"x"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":363,"column":16},"end":{"row":363,"column":17}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":363,"column":17},"end":{"row":363,"column":18}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":363,"column":18},"end":{"row":363,"column":19}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":363,"column":19},"end":{"row":363,"column":20}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":363,"column":20},"end":{"row":363,"column":21}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":363,"column":21},"end":{"row":363,"column":22}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":363,"column":57},"end":{"row":363,"column":67}},"text":"epos-basic"},{"action":"insertText","range":{"start":{"row":363,"column":57},"end":{"row":363,"column":74}},"text":"accounts-extended"}]}]]},"ace":{"folds":[],"scrolltop":5049.556854248047,"scrollleft":0,"selection":{"start":{"row":352,"column":18},"end":{"row":352,"column":18},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":335,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1409927857407,"hash":"40ab4194bb531c9ca68c78b99a6420dc3c9719cc"}