var TABLE = (function() {
    
    //constructor
    var module = function () {};
    
    module._priv = {
    
        template : templates['table'],
        
        returnDefs : function(targets, format, cssClass) {
        
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
    
        }
    
    };
    
    return module;
    
})();


var TABLE_COUNTDOWN = (function($t) {
    
    var _modpriv = $t._priv;

    $t.CountdownLeaderboard = function(id, data, total) {
        
        var _id = id + '-inner';
        
        $j('#' + id).append(_modpriv.template({'id': _id, 'columns' : 5}));
            
        var table = $j('#' + _id).DataTable({
            'data' : data,
            'order' : [[ 1, 'desc' ]],
            'paging' : false,
            'info' : false, 
            'searching' : false,
            'columns' : [{"data": "owner", "title": "ASM"}, 
                         {"data": "grossValue", "title": "Gross Value"}, 
                         {"data": "quantity", "title": "Quantity"},
                         {"data": "vsTarget", "title": "vs Target"}, 
                         {"data": "vsTargetPercentage", "title": "% of Target"}
            ],
            'columnDefs' : [_modpriv.returnDefs([1,3], '$0,0', 'alignRight'),
                            _modpriv.returnDefs([2], '0,0', 'alignRight'),
                            _modpriv.returnDefs([4], '0%', 'alignRight'),
            ],
            'footerCallback' : function (tfoot, data, start, end, display) {
                var api = this.api();

                $j(api.column(0).footer()).html('Total');
                $j(api.column(1).footer()).html(numeral(total.grossValue).format('$0,0'));
                $j(api.column(2).footer()).html(numeral(total.quantity).format('0,0'));              
                $j(api.column(3).footer()).html(numeral(total.vsTarget).format('$0,0'));
                $j(api.column(4).footer()).html(numeral(total.vsTargetPercentage).format('0%'));
            }
        });

        return { 
            reload : function(data) { table.clear().rows.add(data).draw(); } 
        };  
                                
    };
    
    return $t;
    
})(TABLE);var TABLE_OPPORTUNITIES = (function($t) {
    
    var _modpriv = $t._priv;

    $t.HeadlineOpportunities = function(id, data) {
        
        var _id = id + '-inner';
        
        $j('#' + id).append(_modpriv.template({'id': _id, 'columns' : 9}));
            
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
            'columnDefs' : [_modpriv.returnDefs([4,5,6], '$0,0', 'alignRight')],
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
    
    return $t;
    
})(TABLE);