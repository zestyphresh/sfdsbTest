var TIMELINE_HEADLINE_OPPS = (function($l) {
    
    var _modpriv = $l._priv;

    $l.HeadlineOpportunities = function(id, data) {
        
        var options = {
            'maxHeight' : '600px', 
            'minHeight' : '600px'
        };
            
        var groups = [
            {'id' : 'Low Value'},
            {'id' : 'Medium Value'},
            {'id' : 'High Value'}
        ];
            
        var container = document.getElementById(id);
        var timeline = new vis.Timeline(container, data, options);
        
        timeline.setGroups(groups);

        return { 
            reload : function(data) { timeline.setItems(data); timeline.redraw(); }
        };  
                                
    };
    
    return $l;
    
})(TIMELINE);