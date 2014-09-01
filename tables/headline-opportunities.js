var TABLE_OPPORTUNITIES = (function($t) {
    
    var _modpriv = $t._priv;
    
        $t.HeadlineOpportunitySummary = function(id, data) {
        
        var _id = id + '-inner';

        var _columns = [{"data": "stage", "title": "Stage"}, 
                        {"data": "headline", "title": "Headline"},                
                        {"data": "headlineVs", "title": "Vs Last Month"},                    
                        {"data": "threat", "title": "Threat"},                
                        {"data": "threatVs", "title": "Vs Last Month"},                      
                        {"data": "total", "title": "Total"},        
                        {"data": "totalVs", "title": "Vs Last Month"}
        ];
        
        $j('#' + id).append(_modpriv.template({'id': _id, 'columns' : _.size(_columns)}));
            
        var table = $j('#' + _id).DataTable({
            'data' : data,
            'order' : [[ 2, 'desc' ]],
            'paging' : false,
            'info' : false, 
            'searching' : false,
            'columns' : _columns,
            'columnDefs' : [{ 
                                'targets' : [1,2,3,4,5,6], 
                                'render' : function ( data, type, row, meta ) {
                                    if (type === 'display') {
                                        return f.toGbp(data);
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
    

    $t.HeadlineOpportunities = function(id, data) {
        
        var _id = id + '-inner';
        var glyphs = {'More Likely' : {'glyph' : 'glyphicon-chevron-up', 'cls' : ''}, 
                      'Less Likely' : {'glyph' : 'glyphicon-chevron-down', 'cls' : ''},
                      'New' : {'glyph' : 'glyphicon-star', 'cls' : ''},
                      'No Change' : {'glyph' : '', 'cls' : ''}
        };
        var glyphClass = {'Headline' : 'glyph-green', 'Threat' : 'glyph-red'};
        
        var _columns = [{"data": "stageCategoryVsPrevious", "title": "Status"}, //0
                        {"data": "account", "title": "Account"},                //1
                        {"data": "owner", "title": "Owner"},                    //2
                        {"data": "recordType", "title": "Type"},                //3
                        {"data": "name", "title": "Name"},                      //4
                        {"data": "thisYearValue", "title": "This Year"},        //5
                        {"data": "annualisedValue", "title": "Annualised"},     //6
                        {"data": "isoValue", "title": "ISO"},                   //7
                        {"data": "closeDate", "title": "Date"},                 //8
                        {"data": "productCategory", "title": "Category"}        //9
        ];
        
        $j('#' + id).append(_modpriv.template({'id': _id, 'columns' : _.size(_columns)}));
            
        var table = $j('#' + _id).DataTable({
            'data' : data,
            'order' : [[ 2, 'desc' ]],
            'paging' : false,
            'info' : false, 
            'searching' : false,
            'columns' : _columns,
            'columnDefs' : [{ 
                                'targets' : [0], 
                                'render' : function ( data, type, row, meta ) {
                                    //console.log(data, type, meta, full);
                                    if (type === 'display') {
                                        return '<span class="glyphicon ' + glyphs[data].glyph + ' ' + glyphClass[row.recordType] + '"></span>';
                                    } 
                                    return data;
                                }
                            },
                            { 
                                'targets' : [5], //thisYearValue
                                'render' : function ( data, type, row, meta ) {
                                    //console.log(data, type, meta, full);
                                    if (type === 'display') {
                                        return f.gbpComparison(data, row.thisYearValuePrevious);
                                    } 
                                    return data;
                                },
                                'className' : 'text-right'
                            },
                            { 
                                'targets' : [6], //annualisedValue 
                                'render' : function ( data, type, row, meta ) {
                                    //console.log(data, type, meta, full);
                                    if (type === 'display') {
                                        return f.gbpComparison(data, row.annualisedValuePrevious);
                                    } 
                                    return data;
                                },
                                'className' : 'text-right'
                            },
                            { 
                                'targets' : [7], //isoValue 
                                'render' : function ( data, type, row, meta ) {
                                    //console.log(data, type, meta, full);
                                    if (type === 'display') {
                                        return f.gbpComparison(data, row.isoValuePrevious);
                                    } 
                                    return data;
                                },
                                'className' : 'text-right'
                            },
                            { 
                                'targets' : [8], 
                                'render' : function ( data, type, row, meta ) {
                                    //console.log(data, type, meta, full);
                                    if (type === 'display') {
                                        return f.dateComparisonInWeeks(data, row.closeDatePrevious);
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