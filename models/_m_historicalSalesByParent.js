var MODEL_ACCOUNT_SALES = (function($m) {
    
    var _modpriv = $m._priv;

    $m.AccountSales = function(){
        
        //PRIVATE VARS
        var _data = crossfilter();
            
        //PUBLIC VARS   
        var dims = {}, groups = {};
        
        //PUBLIC FUNCTIONS
        function fetch(parent, id) {
            
            console.log('fetch');

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
            
            _(data).each(function(d) {
                d.stringDate = d.invoiceDate;
                d.yearWeek = _modpriv.datesByDate[d.stringDate].fyYearWeek;
                d.yearMonth = _modpriv.datesByDate[d.stringDate].fyYearMonth;
                d.year = _modpriv.datesByDate[d.stringDate].fyYear;
                d.month = _modpriv.datesByDate[d.stringDate].fyMonthNum;
                d.isYTD = _modpriv.datesByDate[d.stringDate].fyIsYearToDate;
                d.invoiceDate = moment(d.invoiceDate, 'YYYY-MM-DD');
            });
            
        }
        
        //Create dimensions from crossfilter
        function _createDims() {
            
            dims.dummy = _data.dimension(function(d) { return 'all'; });
            dims.account = _data.dimension(function(d) { return d.accountName; });
            dims.product = _data.dimension(function(d) { return d.productCode + " " + d.productName; });
            dims.yearMonth = _data.dimension(function(d) { return d.yearMonth; });

        }
        
        //Create groups from crossfilter dimensions
        function _createGroups() {
            
            groups.account = dims.account.group();
            
            groups.productByYear = dims.product
                .group()
                .reduce(_reduceAddByYear, _reduceSubtractByYear, _reduceInitialiseByYear);
                
            groups.yearMonth = dims.yearMonth.group().reduceSum(function(d) { return d.grossValue; });
            
            //Reduce functions
            //TODO - Find way to organise better, will probably multiply quite quickly
            
            //Grouping Products By Year
            function _reduceAddByYear(p, v) {
                
                p.count++;
                p['val' + v.year] += v.grossValue;
                
                p.vsPrevious2011 = p.val2011 - p.val2010;
                p.vsPrevious2012 = p.val2012 - p.val2011; 
                p.vsPrevious2013 = p.val2013 - p.val2012; 
                p.vsPrevious2014 = p.val2014 - p.val2013; 
                
                return p;
            }
            
            function _reduceSubtractByYear(p, v) {
                
                p.count--;
                p['val' + v.year] -= v.grossValue;
                
                p.vsPrevious2011 = p.val2011 - p.val2010;
                p.vsPrevious2012 = p.val2012 - p.val2011; 
                p.vsPrevious2013 = p.val2013 - p.val2012; 
                p.vsPrevious2014 = p.val2014 - p.val2013; 
                
                return p;
            }
            
            function _reduceInitialiseByYear() {
                return {'count' : 0, 
                        'val2010' : 0, 'val2011' : 0, 'val2012': 0, 'val2013': 0, 'val2014': 0, 
                        'vsPrevious2011' : 0, 'vsPrevious2012': 0, 'vsPrevious2013': 0, 'vsPrevious2014': 0};
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