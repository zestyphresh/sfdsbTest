var MODEL_EPOS = (function($m) {
    
    var _modpriv = $m._priv;

    $m.Epos = function(){
        
        //PRIVATE VARS
        var _data = crossfilter();
            
        //PUBLIC VARS   
        var dims = {}, groups = {};
        
        //PUBLIC FUNCTIONS
        function fetch(callback) {

            var deferred = Q.defer();
            
            Q.all([
                DATA_REMOTING.headlineOpps('Homebase'),
                DATA_REMOTING.headlineOpps('Argos'),
                DATA_REMOTING.headlineOpps('Boots'),
                DATA_REMOTING.headlineOpps('John Lewis'),
                DATA_REMOTING.headlineOpps('Wickes'),
                DATA_REMOTING.headlineOpps('Tesco')
            ]).done(function(results) {

                _.each(results, function(v) {
                    
                    _onFetchDataChanges(v);
                    
                    _data.add(v);
                    
                });

                _createDims();
                
                _createGroups();

                deferred.resolve(true);
                
            });

            return deferred.promise;

        }
        
        //PRIVATE FUNCTIONS
        
        //Any data manipulation prior to inserting to crossfilter should be handled here
        function _onFetchDataChanges(data) {
            
            _(data).each(function(v) {
                v.stringDate = v.eposDate;
                v.eposDate = moment(v.eposDate, 'YYYY-MM-DD');
            });
            
        }
        
        //Create dimensions from crossfilter
        function _createDims() {
            
            dims.dummy = _data.dimension(function(d) { return 'all'; });
            dims.accountParentName = _data.dimension(function(d) { return d.accountParentName; });
            dims.subSector = _data.dimension(function(d) { return d.accountSubSector; });
            dims.product = _data.dimension(function(d) { return d.productName; });
            dims.productCategory = _data.dimension(function(d) { return d.productCategory; });

        }
        
        //Create groups from crossfilter dimensions
        function _createGroups() {
            
            groups.parentAccount = dims.accountParentName.group();
            groups.subSector = dims.subSector.group();
            groups.product = dims.product.group();
            groups.productCategory = dims.productCategory.group();
            
        }
        
        return { 
            dims : dims,
            groups : groups,
            fetch : fetch,
        };
        
        //PRIVATE FUNCTIONS
       
    };
    
    return $m;
        
})(MODEL);