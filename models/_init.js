var MODEL = (function() {
    
    //constructor
    var module = function () {};
    
    module._priv = {
        datesByIndex    : {},
        datesByDate     : {},
        getUniqueValues : function(data, key) {
            return _.chain(data).pluck(key).uniq().value();
        },
        createDataSets  : function(views) {
            result = {};
            _.chain(views).each(function(v) { result[v] = {}; });
            return result;
        }
    };
    
    return module; 
    
})();