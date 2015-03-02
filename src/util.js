var util = {

    arrayToUpperCase: function (inArray) {
        for (var i = 0; i < inArray.length; i++) {
            inArray[i] = inArray[i].toUpperCase();
        }
        return inArray;
    },

    makeElement: function (html) {
        var div = document.createElement('div');
        div.innerHTML = html;
        return div.firstChild;
    },

    mergeOptions: function (options, defaultOptions) {
        options = options || {};
        defaultOptions = defaultOptions || {};

        for (var attr in defaultOptions) {
            /*jshint -W089 */
            if (!options.hasOwnProperty(attr)) {
                options[attr] = defaultOptions[attr];
            }
        }

        return options;
    }

};

module.exports = util;