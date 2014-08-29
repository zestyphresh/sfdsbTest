var f = {

    toGbp : function(num) { return accounting.formatMoney(num); },
    
    toGbpWithComparison : function(num1, num2, cls) {
        return '' + accounting.formatMoney(num1) + ' (<span class="' + cls + '">' + accounting.formatMoney(num2) + '</span>)';
    }

};
