var TABLE = (function() {
    
    var _priv = {};
    
    _priv.template = Handlebars.compile(templates['table']);
    
    _priv.returnDefs = function(targets, format, cssClass) {
    
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

    };
    
    return { _priv : _priv };
    
})();


