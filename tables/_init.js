var TABLE = (function() {
    
    //constructor
    var module = function () {};
    
    module._priv = {
    
        template : templates['table'],
        
        returnDefs : function(targets, format, cssClass) {
        
            var render = function (data, type, full, meta) {
                if (type === 'display') {
                    return numeral(data).format(format);
                }
                
                return data;
            };
                
            return {
                'targets' : targets,
                'render' : render, 
                className : cssClass               
            };
    
        },
        
        oppThreatsNegative : function(data, keys) {
            _.each(data, function (v, k) {
                if (v.recordType === 'Threat') {
                    _.each(keys, function(key) {
                        v[key] = -v[key];
                    });
                }
            });
        }
    
    };
    
    return module;
    
})();


