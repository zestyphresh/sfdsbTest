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
    
})(TABLE);