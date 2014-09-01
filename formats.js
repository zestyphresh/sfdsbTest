var f = {

    toGbp : function(num) { return accounting.formatMoney(num); },

    gbpComparison : function(num1, num2) {
        var diff = num1 - num2;
        if (diff == 0) {
            return accounting.formatMoney(num1);
        } else {
            return accounting.formatMoney(num1) + ' (' + accounting.formatMoney(num2) + ')';
        }
    },
    
    dateComparisonInWeeks : function(moment1, moment2) {
        var diff = moment1.diff(moment2, 'weeks');
        if (diff == 0) {
            return moment1.format('YYYY-MM-DD');
        } else {
            return moment1.format('YYYY-MM-DD') + ' (' + diff + ' weeks)';
        }
    }

};
