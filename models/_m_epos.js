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
            
            Q.all([_remote('Homebase')]).done(function(results) {

                _.each(results, function(v) {
                    
                    _onFetchDataChanges(v);
                    
                    _data.add(v);
                    
                });

                _createDims();
                
                _createGroups();
                
                console.log(dims.dummy.top(Infinity));
                
                deferred.resolve(true);
                
            });

            return deferred.promise;

        }
        
        function _remote(parentAccount) {

            var deferred = Q.defer();

            AnalyticsDataProvider.getEpos(
                
                parentAccount,
                
                function (result, event) {

                    if (!event.status) {
                        
                        deferred.reject(false);
                        
                    } else {

                        deferred.resolve(result);
                        
                    }

                }, { buffer: false, escape: true }
                    
            );
            
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