var tables = (function() {
    
    var tmplTable = Handlebars.compile($j("#Template-NakedTable").html());
    
    HeadlineOpportunities = function(id, data) {
        
        var _id = id + '-inner';
        
        $j('#' + id).append(tmplTable({'id': _id, 'columns' : 9}));
            
        var table = $j('#' + _id).DataTable({
            'data' : data,
            'order' : [[ 1, 'desc' ]],
            'paging' : false,
            'info' : false, 
            'searching' : false,
            'columns' : [{"data": "account", "title": "Account"}, 
                         {"data": "recordType", "title": "Type"},
                         {"data": "name", "title": "Name"},
                         {"data": "stage", "title": "Stage"},
                         {"data": "isoValue", "title": "ISO"}, 
                         {"data": "annualisedValue", "title": "Annualised"}, 
                         {"data": "weeklyValue", "title": "Weekly"},
                         {"data": "closeDate", "title": "Date"},
                         {"data": "productCategory", "title": "Category"}
            ],
            'columnDefs' : [_returnDef([4,5,6], '$0,0', 'alignRight')],
            'footerCallback' : function (tfoot, data, start, end, display) {
                var api = this.api();

                var totalISO = api.column(4).data().reduce(function (a, b) { return a + b; });
                var totalAnnualised = api.column(5).data().reduce(function (a, b) { return a + b; });
                var totalWeekly = api.column(6).data().reduce(function (a, b) { return a + b; });
                    
                $j(api.column(0).footer()).html('Total');
                $j(api.column(4).footer()).html(numeral(totalISO).format('$0,0'));
                $j(api.column(5).footer()).html(numeral(totalAnnualised).format('$0,0'));
                $j(api.column(6).footer()).html(numeral(totalWeekly).format('$0,0'));
            }
        });

        return { 
            reload : function(data) { table.clear().rows.add(data).draw(); } 
        };  
                                
    };
    
    _returnDef = function(targets, format, cssClass) {
    
        var render = function (data, type, full, meta) {
            if (type === 'display') {
                return numeral(data).format(format);
            }
            return data;
        };
            
        return {
            'targets' : targets,
            'render' : render, 
            className : cssClass               
        };

    };
    
    return {
        HeadlineOpportunities : HeadlineOpportunities
    };

}());

