Handlebars.registerHelper('times', function(n, block) {
    var result = '';
    for(var i = 0; i < n; ++i)
        result += block.fn(i);
    return result;
});
    
var _templates = {};
    
_templates['dropdown-filters'] = ""+
    "{{#each this}}"+ 
    "    <div class='btn-group'>"+  
    "        <button type='button' class='btn btn-primary btn-sm dropdown-toggle' data-toggle='dropdown'>{{title}} <span class='caret'></span></button>"+  
    "        <ul class='dropdown-menu' role='menu'>"+  
    "           {{#values}}"+             
    "                <li><a data-field='{{../field}}' class='filter'>{{this}}</a></li>"+  
    "            {{/values}}"+  
    "        </ul>"+ 
    "    </div>"+
    "{{/each}}"
;
    
_templates['navbar'] = ""+ 
        "<nav class='navbar navbar-fixed-top navbar-inverse' role='navigation'>"+
        "    <div class='navbar-header'>"+
        "        <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>"+
        "            <span class='sr-only'>Toggle navigation</span>"+
        "            <span class='icon-bar'></span>"+
        "            <span class='icon-bar'></span>"+
        "            <span class='icon-bar'></span>"+
        "        </button>"+
        "        <a class='navbar-brand' href='#'>{{user}}</a>"+
        "    </div>"+
        "    <div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>"+
        "        <ul class='nav navbar-nav navbar-left'>"+
        "            {{#categories}}" +
        "                <li class='dropdown'>"+       
        "                    <a href='#' class='dropdown-toggle' data-toggle='dropdown'>{{name}} <span class='caret'></span></a>"+
        "                 <ul class='dropdown-menu' role='menu'>"+
        "                        {{#views}}"+
        "                            <li><a class='{{modelId}}' href='#{{link}}'>{{name}}</a></li>"+
        "                        {{/views}}"+
        "                    </ul>"+
        "                </li>"+
        "           {{/categories}}" +
        "        </ul>"+
        "        <ul class='nav navbar-nav navbar-right'>"+
        "        </ul>"+
        "    </div>"+
        "</nav>"
;
    
_templates['table'] = ""+
        "<table id='{{id}}' class='table table-condensed table-hover display' cellspacing='0' width='100%'>"+
        "    <thead>"+
        "        <tr role='row'>"+
        "            {{#times columns}}<th></th>{{/times}}"+
        "        </tr>"+
        "    </thead>"+
        "    <tbody></tbody>"+
        "    <tfoot>"+
        "         <tr role='row'>"+
        "            {{#times columns}}<th></th>{{/times}}"+
        "        </tr>"+
        "    </tfoot>"+
        "</table>"
;
    
_templates['heading-no-links'] = ""+
        "<div class='row'>"+
        "    <div class='col-xs-12'>"+           
        "        <h4>"+  
        "            {{title}}"+  
        "        </h4>"+  
        "    </div>"+
        "</div>"
;
    
_templates['heading'] = ""+
        "<div class='col-xs-12'>"+           
        "    <h4>"+  
        "        {{title}}"+  
        "        <small>(Report Links :"+  
        "            {{#reports}}"+                           
        "                <a href=' /{{id}}'>{{title}}</a>{{#unless @last}}<span>, </span>{{/unless}}"+  
        "            {{/reports}})"+     
        "        </small>"+  
        "    </h4>"+  
        "</div>"
;
    
_templates['headline-opportunities'] = ""+
        "<div class='row'>"+
        "    <div class='col-xs-12'>"+
        "        <div id='{{id}}-filters' class='well'></div>"+
        "    </div>"+
        ""+ 
        "    <div id='{{id}}-charts-opp-stages' class='col-xs-12 col-md-3 col-lg-2 height300'>"+
        "    </div>"+
        ""+
        "    <div id='{{id}}-charts-opp-owners' class='col-xs-12 col-md-3 col-lg-2 height300'>"+
        "    </div>"+
        ""+  
        "    <div id='{{id}}-2charts-opp-buckets' class='col-xs-12 col-md-3 col-lg-2 height300'>"+
        "    </div>"+
        ""+  
        "    <div id='{{id}}-3charts-opp-buckets' class='col-xs-12 col-md-3 col-lg-2 height300'>"+
        "    </div>"+
        ""+  
        "    <div id='{{id}}-4charts-opp-buckets' class='col-xs-12 col-md-3 col-lg-2 height300'>"+
        "    </div>"+
        ""+  
        "    <div id='{{id}}-5charts-opp-buckets' class='col-xs-12 col-md-3 col-lg-2 height300'>"+
        "    </div>"+
        ""+  
        "    <div class='col-xs-12 col-md-6'>"+
        "        <div class='panel panel-default'>"+
        "            <div class='panel-heading'>" +
        "                <span>Opportunity Buckets - Change</span>" +
        "                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-charts-opp-buckets-change'><span class='glyphicon glyphicon-plus'></span></a>" +
        "            </div>"+
        "            <div id='{{id}}-charts-opp-buckets-change' class='minChartDims1'></div>"+
        "        </div>"+ 
        "    </div>"+
        ""+  
        "    <div class='col-xs-12'>"+
        "        <div class='panel panel-default'>"+
        "            <div class='panel-heading'>" +
        "                <span>Opportunity List - Confirmed</span>" +
        "                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-tables-opp-list-confirmed'><span class='glyphicon glyphicon-plus'></span></a>" +
        "            </div>"+
        "            <div id='{{id}}-tables-opp-list-confirmed' class='table-responsive'></div>"+
        "        </div>"+ 
        "    </div>"+
        ""+    
        "    <div class='col-xs-12'>"+
        "        <div class='panel panel-default'>"+
        "            <div class='panel-heading'>" +
        "                <span>Opportunity List - Likley</span>" +
        "                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-tables-opp-list-likely'><span class='glyphicon glyphicon-plus'></span></a>" +
        "            </div>"+
        "            <div id='{{id}}-tables-opp-list-likely' class='table-responsive'></div>"+
        "        </div>"+ 
        "    </div>"+
        ""+    
        "    <div class='col-xs-12'>"+
        "        <div class='panel panel-default'>"+
        "            <div class='panel-heading'>" +
        "                <span>Opportunity List - Open</span>" +
        "                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-tables-opp-list-open'><span class='glyphicon glyphicon-plus'></span></a>" +
        "            </div>"+
        "            <div id='{{id}}-tables-opp-list-open' class='table-responsive'></div>"+
        "        </div>"+ 
        "    </div>"+
        ""+    
        "    <div class='col-xs-12'>"+
        "        <div class='panel panel-default'>"+
        "            <div class='panel-heading'>" +
        "                <span>Opportunity List - Unlikley</span>" +
        "                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-tables-opp-list-unlikley'><span class='glyphicon glyphicon-plus'></span></a>" +
        "            </div>"+
        "            <div id='{{id}}-tables-opp-list-unlikely' class='table-responsive'></div>"+
        "        </div>"+ 
        "    </div>"+
        ""+    
        "    <div class='col-xs-12'>"+
        "        <div class='panel panel-default'>"+
        "            <div class='panel-heading'>" +
        "                <span>Opportunity List - Lost</span>" +
        "                <a class='pull-right' data-toggle='collapse' data-target='#{{id}}-tables-opp-list-lost'><span class='glyphicon glyphicon-plus'></span></a>" +
        "            </div>"+
        "            <div id='{{id}}-tables-opp-list-lost' class='table-responsive'></div>"+
        "        </div>"+ 
        "    </div>"+
        ""+
        "    <div class='col-xs-12'>"+
        "        <div class='panel panel-default'>"+
        "            <div class='panel-heading'>Opportunity Timeline</div>"+
        "            <div id='{{id}}-charts-opp-timeline' class='minChartDims3'></div>"+
        "        </div>"+
        "    </div>"+
        ""+    
        "    <div class='col-xs-12'>"+
        "        <div class='panel panel-default'>"+
        "            <div class='panel-heading'>Opportunity Sales</div>"+
        "            <div id='{{id}}-charts-opp-sales' class='minChartDims1'></div>"+
        "        </div>"+ 
        "    </div>"+
        "</div>"
;

_templates['countdown-promo'] = ""+
        "<div class='row'>"+
        "    <div class='col-xs-12'>"+
        "        <div class='panel panel-default'>"+
        "            <div class='panel-heading'>Leaderboard</div>"+
        "            <div id='{{id}}-charts-promo-leaderboard' class='minChartDims1'></div>"+
        "            <div id='{{id}}-tables-promo-leaderboard' class='table-responsive'></div>"+
        "        </div>"+
        "    </div>"+
        ""+    
        "    <div class='col-xs-12'>"+
        "        <div class='panel panel-default'>"+
        "            <div class='panel-heading'>Last Week</div>"+
        "            <div id='{{id}}-charts-promo-lastweek' class='minChartDims1'></div>"+
        "            <div id='{{id}}-tables-promo-lastweek' class='table-responsive'></div>"+ 
        "        </div>"+
        "    </div>"+
        ""+    
        "    <div class='col-xs-12'>"+
        "        <div class='panel panel-default'>"+
        "            <div class='panel-heading'>Weekly Sales</div>"+
        "            <div id='{{id}}-charts-promo-weeklysales' class='minChartDims2'></div>"+
        "        </div>"+
        "    </div>"+ 
        "</div>"
;
    
_templates['container'] = ""+
        "<div id='{{id}}' class='container-fluid dashboard-view'></div>"
;   

_templates['loading'] = ""+
        "<div id='loading' class='container-fluid dashboard-view'>"+
            "<div class='row'>"+
                "<div class='well well-info'>Loading...</div>"+
            "</div>"+
        "</div>"
; 
        
    
var templates =  {
    'container' : Handlebars.compile(_templates['container']),
    'dropdown-filters' : Handlebars.compile(_templates['dropdown-filters']),
    'navbar' : Handlebars.compile(_templates['navbar']),
    'table' : Handlebars.compile(_templates['table']),
    'heading' : Handlebars.compile(_templates['heading']),
    'heading-no-links' : Handlebars.compile(_templates['heading-no-links']),
    'headline-opportunities' : Handlebars.compile(_templates['headline-opportunities']),
    'countdown-promo' : Handlebars.compile(_templates['countdown-promo']),
    'loading' : Handlebars.compile(_templates['loading'])
}; 