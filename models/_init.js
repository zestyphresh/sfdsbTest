var MODEL = (function() {
    
    var _priv = {
        datesByIndex : {},
        datesByDate : {},
        getUniqueValues : function(data, key) {
            return _.chain(data).pluck(key).uniq().value();
        }
    };
    
    return { _priv : _priv }; 
    
})();