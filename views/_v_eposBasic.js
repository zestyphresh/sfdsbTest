var VIEW_EPOS = (function($v) {

    $v.EposBasic = function(args) {

        //PRIVATE VARS - SET
        var _args = args,
            _viewId = 'a0Lb00000076Whd',
            _uid = _.uniqueId(_viewId + '-'), 
            _models = {},
            _loaded = false
        ;

        //PRIVATE VARS - NOT SET
        var chtBasic;
        var fltParentAccount, fltSubSector, fltProduct, fltProductCategory;
        
        //INITIALISE MODELS
        function init(renderAfter) {
            
            _models['epos'] = new gblModel.Epos;
            
            Q.all([_models.epos.fetch()]).done(function() {
                
                _loaded = true;

                if (renderAfter) render();

            });

        }
            
        //RENDER
        function render() { 

            $body.append(templates['container']({'id':_uid}));
            $j('#' + _uid).append(templates['heading-no-links']({'title':'EPOS'}));
            $j('#' + _uid).append(templates['epos-basic']({'id':_uid}));

            //FILTERS
            fltParentAccount = $j('#' + _uid + '-filters-parent-account');
            fltSubSector = $j('#' + _uid + '-filters-sub-sector');
            fltProduct = $j('#' + _uid + '-filters-product');
            fltProductCategory = $j('#' + _uid + '-filters-product-category');
            
            updateFilters();
            
            chart().render();

            bindEvents();

        }
        
        function updateFilters() {
            
            console.log('update filters');
            
            fltParentAccount.find('ul').empty().append(templates['combobox-item'](_models.epos.groups.parentAccount.all()));
            fltSubSector.find('ul').empty().append(templates['combobox-item'](_models.epos.groups.subSector.all()));
            fltProduct.find('ul').empty().append(templates['combobox-item'](_models.epos.groups.product.all()));
            fltProductCategory.find('ul').empty().append(templates['combobox-item'](_models.epos.groups.productCategory.all()));
            
        }
        
        function updateComponents() {
            
            console.log('update components');
            
            chart().update();
            
        }
        
        //BIND EVENTS
        function bindEvents() {
            
            fltParentAccount.on('changed.fu.combobox', function(event, selected) {
                if (selected.value === 'All') {
                    _models.epos.dims.parentAccount.filterAll();
                } else {
                    _models.epos.dims.parentAccount.filterExact(selected.value);
                }
                updateFilters();
                updateComponents();
            });

            fltSubSector.on('changed.fu.combobox', function(event, selected) {
                if (selected.value === 'All') {
                    _models.epos.dims.subSector.filterAll();
                } else {
                    _models.epos.dims.subSector.filterExact(selected.value);
                }
                updateFilters();
                updateComponents();
            });
            
            fltProduct.on('changed.fu.combobox', function(event, selected) {
                if (selected.value === 'All') {
                    _models.epos.dims.product.filterAll();
                } else {
                    _models.epos.dims.product.filterExact(selected.value);
                }
                updateFilters();
                updateComponents();
            });
            
            fltProductCategory.on('changed.fu.combobox', function(event, selected) {
                if (selected.value === 'All') {
                    _models.epos.dims.productCategory.filterAll();
                } else {
                    _models.epos.dims.productCategory.filterExact(selected.value);
                }
                updateFilters();
                updateComponents();
            });
            
        }
        
        //COMPONENT GROUPS
        //Components are grouped by the data they consume to avoid manipulating the same data multiple times
        
        //COMPONENT GROUP - SUMMARY
        function chart() {

            var _data = _models.epos.dims.dummy.top(Infinity);
            
            function render() {
                chtBasic = new CHART.EposBasic(_uid + '-charts-basic', _data);
            }
            
            function update() {
                chtBasic.reload(_data);
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