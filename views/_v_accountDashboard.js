var VIEW_ACCOUNT_DASHBOARD = (function($v) {

    $v.AccountDashboard = function(args) {

        //PRIVATE VARS - SET
        var _args = args,
            _viewId = 'tbc',
            _uid = _.uniqueId(_viewId + '-'), 
            _models = {},
            _loaded = false
        ;

        //PRIVATE VARS - NOT SET
        var tbl;
        var flt;
        
        //INITIALISE MODELS
        function init(renderAfter) {
            
            console.log('init');

            _models['sales'] = new gblModel.AccountSales;
            
            Q.all([_models.sales.fetch(url.params.parent, url.params.id)]).done(function() {
                
                _loaded = true;

                if (renderAfter) render();

            });
            
            console.log(_models.sales.groups.productByYear.all());

        }
            
        //RENDER
        function render() { 

            $body.append(templates['container']({'id':_uid}));
            $j('#' + _uid).append(templates['heading-no-links']({'title':url.params.name}));
            //$j('#' + _uid).append(templates['accounts-extended']({'id':_uid}));

            //FILTERS
            //fltParentAccount = $j('#' + _uid + '-filters-parent-account');
            //fltParentAccount.find('ul').append(templates['combobox-item'](_models.epos.groups.parentAccount.all()));
            
            //fltSubSector = $j('#' + _uid + '-filters-sub-sector');
            //fltSubSector.find('ul').append(templates['combobox-item'](_models.epos.groups.subSector.all()));
            
            //fltProduct = $j('#' + _uid + '-filters-product');
            //fltProduct.find('ul').append(templates['combobox-item'](_models.epos.groups.product.all()));
            
            //fltProductCategory = $j('#' + _uid + '-filters-product-category');
            //fltProductCategory.find('ul').append(templates['combobox-item'](_models.epos.groups.productCategory.all()));
            
            //sales().render();

            //bindEvents();

        }
        
        //BIND EVENTS
        function bindEvents() {
            
            fltParentAccount.on('changed.fu.combobox', function(event, selected) {
                if (selected.value === 'All') {
                    _models.epos.dims.parentAccount.filterAll();
                } else {
                    _models.epos.dims.parentAccount.filterExact(selected.value);
                }
                
                update();
            });

            function update() {
                chart().update();
            }
            
        }
        
        //COMPONENT GROUPS
        //Components are grouped by the data they consume to avoid manipulating the same data multiple times
        
        //COMPONENT GROUP - SUMMARY
        function sales() {

            var _data = _models.accs.dims.dummy.top(Infinity);
            
            function render() {
                tblAccs = new TABLE.AccountsExtended(_uid + '-tables-accs-sales', _data);
            }
            
            function update() {
                tblAccs.reload(_data);
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