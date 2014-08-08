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
    
        }
    
    };
    
    return module;
    
})();


