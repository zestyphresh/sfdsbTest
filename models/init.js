var models = {
    datesByIndex : {},
    datesByDate : {},
    getUniqueValues : function(data, key) {
        return _.chain(data).pluck(key).uniq().value();
    }
};