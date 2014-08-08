function TEMPLATE() {

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
        "        <button type='button' class='btn btn-primary btn-sm dropdown-toggle' data-toggle='dropdown'>{{name}} <span class='caret'></span></button>"+  
        "        <ul class='dropdown-menu' role='menu'>"+  
        "           {{#values}}"+             
        "                <li><a data-field='{{../field}}' class='filter' href='#'>{{this}}</a></li>"+  
        "            {{/values}}"+  
        "        </ul>"+  
        "    </div>"+  
        "{{Other/each}}"
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
    
    _templates['heading'] = ""+
        "<div class='{{gridClass}}'>"+           
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
        "<div class='col-xs-12'>"+
        "    <div id='{{id}}-filters' class='well'></div>"+
        "</div>"+
        ""+
        "<div class='col-xs-12'>"+
        "    <div class='panel panel-default'>"+
        "        <div class='panel-heading'>Opportunity Timeline</div>"+
        "        <div id='{{id}}-charts-opp-timeline' class='minChartDims1'></div>"+
        "    </div>"+
        "</div>"+
        ""+    
        "<div class='col-xs-12'>"+
        "    <div class='panel panel-default'>"+
        "        <div class='panel-heading'>Opportunity Sales</div>"+
        "        <div id='{{id}}-charts-opp-sales' class='minChartDims1'></div>"+
        "    </div>"+ 
        "</div>"+
        ""+    
        "<div class='col-xs-12'>"+
        "    <div class='panel panel-default'>"+
        "        <div class='panel-heading'>Opportunity List</div>"+
        "        <div id='{{id}}-tables-opp-list' class='table-responsive'>"+
        "        </div>"+
        "    </div>"+ 
        "</div>"
    ;
    
    _templates['countdown-promo'] = ""+
        "<div class='col-xs-12'>"+
        "    <div class='panel panel-default'>"+
        "        <div class='panel-heading'>Leaderboard</div>"+
        "        <div id='{{id}}-charts-promo-leaderboard' class='minChartDims1'></div>"+
        "        <div id='{{id}}-tables-promo-leaderboard' class='table-responsive'>"+
        "    </div>"+
        "</div>"+
        ""+    
        "<div class='col-xs-12'>"+
        "    <div class='panel panel-default'>"+
        "        <div class='panel-heading'>Last Week</div>"+
        "        <div id='{{id}}-charts-promo-lastweek' class='minChartDims1'></div>"+
        "        <div id='{{id}}-tables-promo-lastweek' class='table-responsive'>"+
        "    </div>"+ 
        "</div>"+
        ""+    
        "<div class='col-xs-12'>"+
        "    <div class='panel panel-default'>"+
        "        <div class='panel-heading'>Weekly Sales</div>"+
        "        <div id='{{id}}-charts-promo-weekly' class='minChartDims2'></div>"+
        "        </div>"+
        "    </div>"+ 
        "</div>"
    ;
    
    return _(_templates)
        .each(function(v, k) { return { k : function() { Handlebars.compile(v); } }})
        .value();
    
}