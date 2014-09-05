var MODEL_ACCOUNTS_EXTENDED = (function($m) {
    
    var _modpriv = $m._priv;

    $m.AccountsExtended = function(){
        
        //PRIVATE VARS
        var _data = crossfilter();
            
        //PUBLIC VARS   
        var dims = {}, groups = {};
        
        //PUBLIC FUNCTIONS
        function fetch(callback) {

            var deferred = Q.defer();
            
            Q.all([
                DATA_REMOTING.accountsExtended()
            ]).done(function(results) {

                _.each(results, function(v) {

                    //_onFetchDataChanges(v); No changes to this dataset yet
                    
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

            });
            
        }
        
        //Create dimensions from crossfilter
        function _createDims() {
            
            dims.dummy = _data.dimension(function(d) { return 'all'; });
            dims.account = _data.dimension(function(d) { return d.name; });
            dims.parentAccount = _data.dimension(function(d) { return d.parentName; });
            dims.subSector = _data.dimension(function(d) { return d.accountSubSector === undefined ? 'N/A' : d.accountSubSector; });
            dims.sector = _data.dimension(function(d) { return d.sector === undefined ? 'N/A' : d.sector; });
            dims.owner = _data.dimension(function(d) { return d.owner; });
            dims.reportingOwner = _data.dimension(function(d) { return d.reportingOwner; });

        }
        
        //Create groups from crossfilter dimensions
        function _createGroups() {
            
            groups.account = dims.account.group();
            groups.parentAccount = dims.parentAccount.group();
            groups.subSector = dims.subSector.group();
            groups.sector = dims.sector.group();
            groups.owner = dims.owner.group();
            groups.reportingOwner = dims.reportingOwner.group();
            
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