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
                        {"data": "isoValue", "title": "ISO"},                   //4
                        {"data": "annualisedValue", "title": "Annualised"},     //5
                        {"data": "weeklyValue", "title": "Weekly"},             //6
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
                                'targets' : [4], 
                                'render' : function ( data, type, full, meta ) {
                                    //console.log(data, type, meta, full);
                                    if (type === 'display') {
                                        var diff = data - full.isoValuePrevious;
                                        if (diff == 0) {
                                            return f.toGbp(data);
                                        } else {
                                            return f.toGbpWithComparison(data, diff);
                                        }
                                    } 
                                    return data;
                                }
                            },
                            { 
                                'targets' : [5], 
                                'render' : function ( data, type, full, meta ) {
                                    //console.log(data, type, meta, full);
                                    if (type === 'display') {
                                        var diff = data - full.annualisedValuePrevious;
                                        if (diff == 0) {
                                            return f.toGbp(data);
                                        } else {
                                            return f.toGbpWithComparison(data, diff);
                                        }
                                    } 
                                    return data;
                                }
                            },
                            { 
                                'targets' : [6], 
                                'render' : function ( data, type, full, meta ) {
                                    //console.log(data, type, meta, full);
                                    if (type === 'display') {
                                        var diff = data - full.weeklyValuePrevious;
                                        if (diff == 0) {
                                            return f.toGbp(data);
                                        } else {
                                            return f.toGbpWithComparison(data, diff);
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
                    isoCol = 4,
                    annualisedCol = 5,
                    weeklyCol = 6;
                    
                var totals = _(data).reduce(function(r, v, k) {
                    
                    return {'totalISO' : r.iso + v.isoValue, 
                            'totalAnnualised' : r.annualised + v.annualisedValue, 
                            'totalWeekly' : r.weekly + v.weeklyValue
                    };
                    
                }, {'iso':0, 'annualised':0, 'weekly':0}).value();    
                
                //var totalISO = api.column(isoCol).data().reduce(function (a, b) { return a + b; });
                //var totalAnnualised = api.column(annualisedCol).data().reduce(function (a, b) { return a + b; });
                //var totalWeekly = api.column(weeklyCol).data().reduce(function (a, b) { return a + b; });
                    
                $j(api.column(0).footer()).html('Total');
                //$j(api.column(isoCol).footer()).html(numeral(totalISO).format('$0,0'));
                //$j(api.column(annualisedCol).footer()).html(numeral(totalAnnualised).format('$0,0'));
                //$j(api.column(weeklyCol).footer()).html(numeral(totalWeekly).format('$0,0'));
                $j(api.column(isoCol).footer()).html(f.toGBP(totals.iso));
                $j(api.column(annualisedCol).footer()).html(f.toGBP(totals.annualised));
                $j(api.column(weeklyCol).footer()).html(f.toGBP(totals.weekly));
            }
        });

        return { 
            reload : function(data) { table.clear().rows.add(data).draw(); } 
        };  
                                
    };
    
    return $t;
    
})(TABLE);