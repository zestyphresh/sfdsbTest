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
                        {"data": "owner", "title": "Owner"},                    //2
                        {"data": "recordType", "title": "Type"},                //3
                        {"data": "name", "title": "Name"},                      //4
                        {"data": "thisYearValue", "title": "This Year"},        //5
                        {"data": "annualisedValue", "title": "Annualised"},     //6
                        {"data": "isoValue", "title": "ISO"},                   //7
                        {"data": "closeDate", "title": "Date"},                 //8
                        {"data": "productCategory", "title": "Category"}        //9
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
                                'targets' : [5], //thisYearValue
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
                                },
                                'className' : 'text-right'
                            },
                            { 
                                'targets' : [6], //annualisedValue 
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
                                },
                                'className' : 'text-right'
                            },
                            { 
                                'targets' : [7], //isoValue 
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
                                },
                                'className' : 'text-right'
                            },
                            { 
                                'targets' : [8], 
                                'render' : function ( data, type, full, meta ) {
                                    //console.log(data, type, meta, full);
                                    if (type === 'display') {
                                        if (data == full.closeDatePrevious) {
                                            return data;
                                        } else {
                                            return data.format('YYYY-MM-DD') + ' (' + data.diff(full.closeDatePrevious, 'weeks') + ' weeks)';
                                        }
                                    } 
                                    return data;
                                },
                                'className' : 'text-right'
                            }
            ],
            'footerCallback' : function (tfoot, data, start, end, display) {
                var api = this.api(),
                    thisYearCol = 5,
                    annualisedCol = 6,
                    isoCol = 7;
                    
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