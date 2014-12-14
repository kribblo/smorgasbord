var util = {
	arrayToUpperCase: function(inArray) {
		for (var i = 0; i < inArray.length; i++) {
			inArray[i] = inArray[i].toUpperCase();
		}
		return inArray;
	},
	makeElement: function(html) {
		var div = document.createElement('div');
		div.innerHTML = html;
		return div.firstChild;
	}
};

module.exports = util;