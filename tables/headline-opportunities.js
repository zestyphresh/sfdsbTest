var TABLE_OPPORTUNITIES = (function($t) {
    
    var _modpriv = $t._priv;

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
                        {"data": "recordType", "title": "Type"},                //2
                        {"data": "name", "title": "Name"},                      //3
                        {"data": "thisYearValue", "title": "This Year"},        //4
                        {"data": "annualisedValue", "title": "Annualised"},     //5
                        {"data": "isoValue", "title": "ISO"},                   //6
                        {"data": "closeDate", "title": "Date"},                 //7
                        {"data": "productCategory", "title": "Category"}        //8
        ]
        
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
                                'render' : function ( data, type, full, meta ) {
                                    //console.log(data, type, meta, full);
                                    if (type === 'display') {
                                        return '<span class="glyphicon ' + glyphs[data].glyph + ' ' + glyphClass[full.recordType] + '"></span>';
                                    } 
                                    return data;
                                }
                            },
                            { 
                                'targets' : [4], //thisYearValue
                                'render' : function ( data, type, full, meta ) {
                                    //console.log(data, type, meta, full);
                                    if (type === 'display') {
                                        var diff = data - full.thisYearValuePrevious;
                                        if (diff == 0) {
                                            return f.toGbp(data);
                                        } else {
                                            return f.toGbpWithComparison(data, diff, '');
                                        }
                                    } 
                                    return data;
                                }
                            },
                            { 
                                'targets' : [5], //annualisedValue 
                                'render' : function ( data, type, full, meta ) {
                                    //console.log(data, type, meta, full);
                                    if (type === 'display') {
                                        var diff = data - full.annualisedValuePrevious;
                                        if (diff == 0) {
                                            return f.toGbp(data);
                                        } else {
                                            return f.toGbpWithComparison(data, diff, '');
                                        }
                                    } 
                                    return data;
                                }
                            },
                            { 
                                'targets' : [6], //isoValue 
                                'render' : function ( data, type, full, meta ) {
                                    //console.log(data, type, meta, full);
                                    if (type === 'display') {
                                        var diff = data - full.isoValuePrevious;
                                        if (diff == 0) {
                                            return f.toGbp(data);
                                        } else {
                                            return f.toGbpWithComparison(data, diff, '');
                                        }
                                    } 
                                    return data;
                                }
                            },
                            { 
                                'targets' : [7], 
                                'render' : function ( data, type, full, meta ) {
                                    //console.log(data, type, meta, full);
                                    if (type === 'display') {
                                        if (data == full.closeDatePrevious) {
                                            return data;
                                        } else {
                                            return data + ' (' + moment(data, 'YYYY-MM-DD').diff(moment(full.closeDatePrevious, 'YYYY-MM-DD'), 'weeks') + ' weeks)';
                                        }
                                    } 
                                    return data;
                                }
                            }
            ],
            'footerCallback' : function (tfoot, data, start, end, display) {
                var api = this.api(),
                    thisYearCol = 4,
                    annualisedCol = 5,
                    isoCol = 6;
                    
                var totals = _(data).reduce(function(r, v, k) {
                    
                    return {'thisYear' : r.thisYear + v.thisYearValue, 
                            'annualised' : r.annualised + v.annualisedValue, 
                            'iso' : r.iso + v.isoValue
                    };
                    
                }, {'thisYear':0, 'annualised':0, 'iso':0}); 

                $j(api.column(0).footer()).html('Total');
                $j(api.column(thisYearCol).footer()).html(f.toGbp(totals.thisYear));
                $j(api.column(annualisedCol).footer()).html(f.toGbp(totals.annualised));
                $j(api.column(isoCol).footer()).html(f.toGbp(totals.iso));
            }
        });

        return { 
            reload : function(data) { table.clear().rows.add(data).draw(); } 
        }; 
        
    };
    
    return $t;
    
})(TABLE);