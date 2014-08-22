(function() {

    //accounting.js default settings
    accounting.settings = {
    	currency: {
    		symbol : "£",
    		decimal : ".",
    		thousand : ",",
    		precision : 0
    	},
    	number: {
    		precision : 0,
    		thousand : ",",
    		decimal : "."
    	}
    };
    
    accounting.settings.currency.format = {
    	pos : '%s%v',   // £1.00
    	neg : '-%s%v', // £1.00
    	zero : '%s%v',   // £1.00
    };

})();
