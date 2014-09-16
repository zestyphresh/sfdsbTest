var MODEL_ACCOUNT_SALES = (function($m) {
    
    var _modpriv = $m._priv;

    $m.AccountSales = function(){
        
        //PRIVATE VARS
        var _data = crossfilter();
            
        //PUBLIC VARS   
        var dims = {}, groups = {};
        
        //PUBLIC FUNCTIONS
        function fetch(parent, id) {

            var deferred = Q.defer();
            
            Q.all([
                DATA_REMOTING.historicalSalesByParent(parent, id)
            ]).done(function(results) {
                
                console.log(results);

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
                v.stringDate = v.invoiceDate;
                v.yearWeek = datesByDate.stringDate.fyYearWeek;
                v.yearMonth = datesByDate.stringDate.fyYearMonth;
                v.year = datesByDate.stringDate.fyYear;
                v.month = datesByDate.stringDate.fyMonthNum;
                v.isYTD = datesByDate.stringDate.fyIsYearToDate;
                v.invoiceDate = moment(v.invoiceDate, 'YYYY-MM-DD');
            });
            
        }
        
        //Create dimensions from crossfilter
        function _createDims() {
            
            dims.dummy = _data.dimension(function(d) { return 'all'; });
            dims.account = _data.dimension(function(d) { return d.accountName; });

        }
        
        //Create groups from crossfilter dimensions
        function _createGroups() {
            
            groups.account = dims.account.group();
            
            groups.productByYear = dims.product
                .group()
                .reduce(_reduceAddByYear, _reduceSubtractByYear, _reduceInitialiseByYear);
            
            //Reduce functions
            //TODO - Find way to organise better, will probably multiply quite quickly
            function _reduceAddByYear(p, v) {
                
                p.count++;
                p[v.year] += v.grossValue;
                
                p.2011vsPrevious = p.val2011 - p.val2010;
                p.2012vsPrevious = p.val2012 - p.val2011; 
                p.2013vsPrevious = p.val2013 - p.val2012; 
                p.2014vsPrevious = p.val2014 - p.val2013; 
                
                return p;
            }
            
            function _reduceSubtractByYear(p, v) {
                
                p.count--;
                p[v.year] -= v.grossValue;
                
                p.2011vsPrevious = p.val2011 - p.val2010;
                p.2012vsPrevious = p.val2012 - p.val2011; 
                p.2013vsPrevious = p.val2013 - p.val2012; 
                p.2014vsPrevious = p.val2014 - p.val2013; 
                
                return p;
            }
            
            function _reduceInitialiseByYear() {
                return {'count' : 0, 
                        'val2010' : 0, 'val2011' : 0, 'val2012': 0, 'val2013': 0, 'val2014': 0, 
                        '2011vsPrevious' : 0, '2012vsPrevious': 0, '2013vsPrevious': 0, '2014vsPrevious': 0};
            }
            
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