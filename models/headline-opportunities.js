var MODEL_OPPORTUNITIES = (function($m) {
    
    var _modpriv = $m._priv;

    $m.HeadlineOpportunities = function(){
        
        var _modelId = 'a0Mb0000005LPl5',
            _uid = _.uniqueId(_modelId + '-'),
            _data = [];
            _dataByWeek = [];
        ;

        var _filters = 
            [{'field' : 'account', 'title' : 'Account', 'values' : []},
             {'field' : 'accountSector', 'title' : 'Sector', 'values' : []},
             {'field' : 'owner', 'title' : 'Owner', 'values' : []},
             {'field' : 'productCategory', 'title' : 'Category', 'values' : []},
             {'field' : 'recordType', 'title' : 'Type', 'values' : []},
             {'field' : 'stage', 'title' : 'Stage', 'values' : []},
             {'field' : 'isBudgeted', 'title' : 'Budgeted?', 'values' : []},
             {'field' : 'isPromotion', 'title' : 'Promotion?', 'values' : []}
            ];
        
        function fetch(callback) {
            
            var deferred = Q.defer();

            AnalyticsViewProvider.getHeadlineOpportunityTimeline(
                
                function (result, event) {
                    
                    if (!event.status) {
                        
                        deferred.reject(false);
                        
                    } else {
                        
                        var endOfYear = new moment('2014-12-31', 'YYYY-MM-DD');

                        _data = _(result.opps).each(function(v) {
                            v.uName = v.name + ' (' + v.account + ' ' + _.uniqueId() + ')'; 
                            v.mDate = moment(v.closeDate, 'YYYY-MM-DD');
                        })
                        .filter(function(v) {

                            return v.mDate.isBefore(endOfYear);
                            
                        })
                        .value();
                        
                        _dataByWeek = _dataTransformToWeeks(_data);
                        
                        updateFilters();

                        deferred.resolve(true);
                        
                    }

                }, { escape: true }
                    
            );
            
            return deferred.promise;
            
        }
        
        function updateFilters(){
            
            _.chain(_filters).each(function(f) { 
                f.values = _modpriv.getUniqueValues(_data.normal, f.field);
            });
            
        }
        
        return { 
            fetch : fetch,
            updateFilters : updateFilters,
            getData : function() { return _data; },
            getDataByWeek : function() { return _dataByWeek; },
            getFilters : function() { return _filters; }
        };
        
        //PRIVATE FUNCTIONS
        //TODO - Not adding records correctly by week plus need way to push week 53 to week 1
        function _dataTransformToWeeks(originalData) {
            
            var deliveryWeeks = 4,
                storeWeeks = 4,
                newData = [];
    
            _(originalData).each(function(d) {

                var index = _modpriv.datesByDate[d.closeDate].dateIndex;
                
                var headline = d.recordType === 'Headline' ? true : false;
    
                var thisWeek = $j.extend({}, d);
                    thisWeek.type = 'Live';
                    newData.push(thisWeek);
                
                if(d.recordType == 'Headline') {
                    
                    for (var i = 1; i <= deliveryWeeks; i++) {
                        
                        var newIndex = index - (i*7);
                        
                        while (_modpriv.datesByIndex[newIndex].cyWeekNum == 53) {newIndex--;}

                        var delWeek = $j.extend({}, d);
                            delWeek.week = _modpriv.datesByIndex[newIndex].fyYearWeek;
                            delWeek.month = _modpriv.datesByIndex[newIndex].fyYearMonth;
                            delWeek.closeDate = _modpriv.datesByIndex[newIndex].cyDate;
                            delWeek.weeklyValue = 0;
                            delWeek.type = 'Delivery';
                        newData.push(delWeek);
                
                    }
    
                    for (var i = 1; i <= storeWeeks; i++) {
                        
                        while (_modpriv.datesByIndex[newIndex].cyWeekNum == 53) {newIndex++;}
                        
                        var newIndex = index + (i*7);

                        var storeWeek = $j.extend({}, d);
                            storeWeek.week = _modpriv.datesByIndex[newIndex].fyYearWeek;
                            storeWeek.month = _modpriv.datesByIndex[newIndex].fyYearMonth;
                            storeWeek.closeDate = _modpriv.datesByIndex[newIndex].cyDate;
                            storeWeek.type = 'In Store';
                        newData.push(storeWeek);
                    
                    }
                
                }
                
                if (!d.isPromotion) {
                
                    var maxIndex = 1826; 
                    var add = headline ? storeWeeks * 7 : 0;
                    var start = index + add;
                    var remainingWeeks = Math.floor((maxIndex - start) / 7);

                    for (var i = 1; i <= remainingWeeks; i++) {
                        
                        var newIndex = start + (i*7);
                        
                        while (_modpriv.datesByIndex[newIndex].cyWeekNum == 53) {newIndex++;}
                    
                        var saleWeek = $j.extend({}, d);
                            saleWeek.week = _modpriv.datesByIndex[newIndex].fyYearWeek;
                            saleWeek.month = _modpriv.datesByIndex[newIndex].fyYearMonth;
                            saleWeek.closeDate = _modpriv.datesByIndex[newIndex].cyDate;
                            saleWeek.type = headline ? 'Sales' : 'Loss';
                        newData.push(saleWeek);
                    
                    }
                
                }
                
            });
                
            return newData;
            
        }
    
    };
    
    return $m;
        
})(MODEL);