<script type="text/javascript">
        
    Handlebars.registerHelper('times', function(n, block) {
        var result = '';
        for(var i = 0; i < n; ++i)
            result += block.fn(i);
        return result;
    });

</script>

<script id='Template-DropdownFilter' type='text/x-handlebars-template'>
    
    {{#each this}}    
        <div class="btn-group">
            <button type="button" class="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown">{{name}} <span class="caret"></span></button>
            <ul class="dropdown-menu" role="menu">
                {{#values}}           
                    <li><a data-field='{{../field}}' class='filter' href="#">{{this}}</a></li>
                {{/values}}
            </ul>
        </div>
    {{Other/each}}
    
</script>  

<script id='Template-Navbar' type='text/x-handlebars-template'>

    <nav class="navbar navbar-fixed-top navbar-inverse" role="navigation">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">{{title}}</a>
            <span id="loading"></span>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-left">
                {{#links}}
                   <li id='{{id}}'><a href='#/{{id}}'>{{linkText}}</a></li> 
                {{/links}}
            </ul>
            <ul class="nav navbar-nav navbar-right">
            </ul>
        </div>
    </nav>

</script>

<script id='Template-Views' type='text/x-handlebars-template'>
     
     <div class='container-fluid'>

        {{#views}}
            <div id='{{id}}' class='row'></div>
        {{/views}}
    
    </div>
    
</script>

<script id='Template-PanelHeading' type='text/x-handlebars-template'>

    <div class='panel-heading'>
        <span class='{{#class}}{{this}}{{#unless @last}} {{/unless}}{{/class}}'>{{title}}</span> 
    </div>
    
</script>

<script id='Template-ChartContainer' type='text/x-handlebars-template'>

     <div id='{{chartContainerId}}' class='{{#class}}{{this}}{{#unless @last}} {{/unless}}{{/class}}'>
     </div>
    
</script> 

<script id='Template-NakedTable' type='text/x-handlebars-template'>

    <table id='{{id}}' class='table table-condensed table-hover display' cellspacing='0' width='100%'>
        <thead>
            <tr role='row'>
                {{#times columns}}<th></th>{{/times}}
            </tr>
        </thead>
        <tbody></tbody>
        <tfoot>
             <tr role='row'>
                {{#times columns}}<th></th>{{/times}}
            </tr>
        </tfoot>
    </table>
     
</script>

<script id='Template-Heading' type='text/x-handlebars-template'> 
    
    <div class="{{gridClass}}">            
        <h4>
            <img class='loading' src='{!URLFOR($Resource.NowLoadingImage )}' />                
            {{title}}
            <small>(Report Links :
                {{#reports}}                         
                    <a href=" /{{id}}">{{title}}</a>{{#unless @last}}<span>, </span>{{/unless}}
                {{/reports}})   
            </small>
        </h4>
    </div>

</script>

<script id='Template-Panel' type='text/x-handlebars-template'> 

    <div class="{{#gridClass}}{{this}}{{#unless @last}} {{/unless}}{{/gridClass}}">
                    
        <div class="panel panel-{{panelStyle}}">
        
            {{#if this.panelHeading.show}}                                
                {{> panel-heading this.panelHeading}}
            {{/if}}
            
            {{#if this.chart.show}}                  
                {{> chart-container this.chart}}
            {{/if}}
                
            {{#if this.table.show}}                  
                {{> table-container this.table}}         
            {{/if}}
                                                          
        </div> 
                            
    </div> 

</script>

<script id='Template-HeadlineOpportunities' type='text/x-handlebars-template'>

    <div class='col-xs-12'>
        <div id='{{id}}-filters' class="well"></div> 
    </div>  

    <div class='col-xs-12'>
        <div class="panel panel-default">
            <div class='panel-heading'>Opportunity Timeline</div>
            <div id='{{id}}-charts-opp-timeline' class='minChartDims1'></div>
        </div> 
    </div> 
    
    <div class='col-xs-12'>
        <div class="panel panel-default">
            <div class='panel-heading'>Opportunity Sales</div>
            <div id='{{id}}-charts-opp-sales' class='minChartDims1'></div>
        </div> 
    </div>
    
    <div class='col-xs-12'>
        <div class="panel panel-default">
            <div class='panel-heading'>Opportunity List</div>
            <div id='{{id}}-tables-opp-list' class='table-responsive'>
            </div>
        </div> 
    </div> 

</script>