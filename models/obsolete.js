//Converts headline opportunities into weekly sales values. Could still be useful for comparing vs budgets. 
//If possible optimisation required as it is heavily processor intensive when dealing with a large number of opportunities.

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