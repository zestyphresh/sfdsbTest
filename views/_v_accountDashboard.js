var VIEW_ACCOUNT_DASHBOARD = (function($v) {

    $v.AccountDashboard = function(args) {

        //PRIVATE VARS - SET
        var _args = args,
            _viewId = 'aaaaaaaaaaaaaaa',
            _uid = _.uniqueId(_viewId + '-'), 
            _models = {},
            _loaded = false
        ;

        //PRIVATE VARS - NOT SET
        var _components = {
            tables : {},
            charts : {}
        }
        var tbl;
        var flt;
        
        //INITIALISE MODELS
        function init(renderAfter) {
            
            _models['sales'] = new gblModel.AccountSales;
            
            Q.all([_models.sales.fetch(url.params.parent, url.params.id)]).done(function() {
                
                _loaded = true;

                if (renderAfter) render();

            });

        }
            
        //RENDER
        function render() { 

            $body.append(templates['container']({'id':_uid}));
            $j('#' + _uid).append(templates['heading-no-links']({'title':url.params.name}));
            $j('#' + _uid).append(templates['account-dashboard']({'id':_uid}));

            //FILTERS
            //fltParentAccount = $j('#' + _uid + '-filters-parent-account');
            //fltParentAccount.find('ul').append(templates['combobox-item'](_models.epos.groups.parentAccount.all()));
            
            //fltSubSector = $j('#' + _uid + '-filters-sub-sector');
            //fltSubSector.find('ul').append(templates['combobox-item'](_models.epos.groups.subSector.all()));
            
            //fltProduct = $j('#' + _uid + '-filters-product');
            //fltProduct.find('ul').append(templates['combobox-item'](_models.epos.groups.product.all()));
            
            //fltProductCategory = $j('#' + _uid + '-filters-product-category');
            //fltProductCategory.find('ul').append(templates['combobox-item'](_models.epos.groups.productCategory.all()));
            
            allSales().render();

            //bindEvents();

        }
        
        //BIND EVENTS
        function bindEvents() {
            
        }
        
        //COMPONENT GROUPS
        //Components are grouped by the data they consume to avoid manipulating the same data multiple times
        
        //COMPONENT GROUP - SUMMARY
        function allSales() {

            var _data = _models.sales.dims.dummy.top(Infinity);
            
            function render() {
                chtSales = new CHART.WeeklySales(_uid + '-charts-sales-weekly', _data);
            }
            
            function update() {
                chtSales.reload(_data);
            }
            
            return { render : render, update : update };
        }

        return { 
            init : init,
            isLoaded : function() { return _loaded; },
            getUid : function() { return _uid; },
            render : render
        };
        
    };
    
    return $v;

})(VIEW);