var TABLE_OPPORTUNITIES = (function($t) {
    
    var _modpriv = $t._priv;

    $t.HeadlineOpportunities = function(id, data) {
        
        var _id = id + '-inner';
        var glyphs = {'More Likely' : {'glyph' : 'glyphicon-chevron-up', 'cls' : ''}, 
                      'Less Likely' : {'glyph' : 'glyphicon-chevron-down', 'cls' : ''},
                      'New' : {'glyph' : 'glyphicon-star', 'cls' : ''},
                      'No Change' : {'glyph' : 'glyphicon-star', 'cls' : ''}
        };
        var glyphClass = {'Headline' : 'glyph-green', 'Threat' : 'glyph-red'};
        
        $j('#' + id).append(_modpriv.template({'id': _id, 'columns' : 9}));
            
        var table = $j('#' + _id).DataTable({
            'data' : data,
            'order' : [[ 2, 'desc' ]],
            'paging' : false,
            'info' : false, 
            'searching' : false,
            'columns' : [{"data": "stageCategoryVsPrevious", "title": "Status"},
                         {"data": "account", "title": "Account"}, 
                         {"data": "recordType", "title": "Type"},
                         {"data": "name", "title": "Name"},
                         {"data": "stage", "title": "Stage"},
                         {"data": "isoValue", "title": "ISO"}, 
                         {"data": "annualisedValue", "title": "Annualised"}, 
                         {"data": "weeklyValue", "title": "Weekly"},
                         {"data": "closeDate", "title": "Date"},
                         {"data": "productCategory", "title": "Category"}
            ],
            'columnDefs' : [_modpriv.returnDefs([5,6,7], '$0,0', 'alignRight'),
                            { 
                                'targets' : [0], 
                                'render' : function ( data, type, full, meta ) {
                                    //console.log(data, type, meta, full);
                                    if (type === 'display') {
                                        return '<span class="glyphicon ' + glyphs[data].glyph + ' ' + glyphClass[full.recordType] + '"></span>';
                                    } 
                                    return data;
                                }
                            }
            ],
            'footerCallback' : function (tfoot, data, start, end, display) {
                var api = this.api();
                
                var totalISO = api.column(5).data().reduce(function (a, b) { return a + b; });
                var totalAnnualised = api.column(6).data().reduce(function (a, b) { return a + b; });
                var totalWeekly = api.column(7).data().reduce(function (a, b) { return a + b; });
                    
                $j(api.column(0).footer()).html('Total');
                $j(api.column(5).footer()).html(numeral(totalISO).format('$0,0'));
                $j(api.column(6).footer()).html(numeral(totalAnnualised).format('$0,0'));
                $j(api.column(7).footer()).html(numeral(totalWeekly).format('$0,0'));
            }
        });

        return { 
            reload : function(data) { table.clear().rows.add(data).draw(); } 
        };  
                                
    };
    
    return $t;
    
})(TABLE);