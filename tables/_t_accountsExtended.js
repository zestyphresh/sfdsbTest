var TABLE_ACCOUNTS_EXTENDED = (function($t) {
    
    var _modpriv = $t._priv;
    
    $t.AccountsExtended = function(id, data) {
        
        var _id = id + '-inner';
        
        var _stages = ['Confirmed', 'Likely', 'Open', 'Unlikely', 'Lost'];

        var _columns = [{"data": "name", "title": "Account"},
                        {"data": "parentName", "title": "Parent Account"}, 
                        {"data": "owner", "title": "Owner"},                
                        {"data": "netSalesLastPeriod", "title": "Sales Last Period"},   
                        {"data": "netSalesPreviousLastPeriod", "title": "Previous Last Period"}, 
                        {"data": "netSalesPreviousLastPeriod", 'title' : 'Vs'},
                        {"data": "netBudgetLastPeriod", "title": "Budget Last Period"},
                        {"data": "netBudgetLastPeriod", 'title' : 'Vs'},
                        {"data": "netTargetLastPeriod", "title": "Target Last Period"},
                        {"data": "netTargetLastPeriod", 'title' : 'Vs'}
        ];
        
        $j('#' + id).append(_modpriv.template({'id': _id, 'columns' : _.size(_columns), 'footer' : false}));
            
        var table = $j('#' + _id).DataTable({
            'data' : data,
            'paging' : false,
            'info' : false, 
            'searching' : false,
            'columns' : _columns,
            'columnDefs' : [{ 
                                'targets' : [3,4,6,8], 
                                'render' : function ( data, type, row, meta ) {
                                    switch (type) {
                                        case 'display':
                                            return f.toGbp(data);
                                            break;
                                    }

                                    return data;
                                },
                                'className' : 'text-right'
                            },
                            { 
                                'targets' : [5,7,9], 
                                'render' : function ( data, type, row, meta ) {
                                    switch (type) {
                                        case 'display':
                                            return f.toGbp(row.netSalesLastPeriod - data);
                                            break;
                                        case 'sort':
                                            return row.netSalesLastPeriod - data;
                                            break;
                                    }

                                    return data;
                                },
                                'className' : 'text-right'
                            }
            ],

        });

        return { 
            reload : function(data) { table.clear().rows.add(data).draw(); } 
        }; 
        
    };

    return $t;
    
})(TABLE);