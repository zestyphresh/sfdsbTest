var TABLE_COUNTDOWN = (function($t) {
    
    var _modpriv = $t._priv;

    $t.CountdownLeaderboard = function(id, data) {
        
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
                
                console.log(api.column(1), api.column(2));

                var totalValue = api.column(1).data().reduce(function (a, b) {
                    return a + b;
                })
                var totalQuantity = api.column(2).data().reduce(function (a, b) {
                    return a + b;
                })
                var totalVsTarget = -totalTarget + totalValue;
                var vsTargetPercentage = totalValue / totalTarget;
                
                $j(api.column(0).footer()).html('Total');
                $j(api.column(1).footer()).html(numeral(totalValue).format('$0,0'));
                $j(api.column(2).footer()).html(numeral(totalQuantity).format('0,0'));              
                $j(api.column(3).footer()).html(numeral(totalVsTarget).format('$0,0'));
                $j(api.column(4).footer()).html(numeral(vsTargetPercentage).format('0%'));
            }
        });

        return { 
            reload : function(data) { table.clear().rows.add(data).draw(); } 
        };  
                                
    };
    
    return $t;
    
})(TABLE);