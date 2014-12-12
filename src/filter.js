var util = require('./util');

var MARKER =  'filter-' + Math.random().toString(36).substring(2, 6);

var defaultOptions = {
	caseSensitive: false
};

var filter = function (table, texts, options) {

	// TODO: util.mergeOptions
	options = options || {};
	for (var attr in defaultOptions) {
		if (!options.hasOwnProperty(attr)) {
			options[attr] = defaultOptions[attr];
		}
	}

	if (!options.caseSensitive) {
		texts = util.arrayToUpperCase(texts);
	}

	restoreCommentedRows(table);

	// TODO: collect all from multiple tBodies, test it
	var rows = table.rows.length > 0 ? table.rows : table.tBodies[0].rows;

	for (var i = rows.length - 1; i >= 0; i--) {
		var row = rows[i];

		if(row.parentNode.tagName === 'THEAD') {
			continue;
		}

		var rowText = row.textContent;
		if (!options.caseSensitive) {
			rowText = rowText.toUpperCase();
		}

		for (var j = 0; j < texts.length; j++) {
			var text = texts[j];

			if (rowText.indexOf(text) < 0) {
				var comment = document.createComment(MARKER + row.outerHTML);
				row.parentNode.replaceChild(comment, row);
				break;
			}
		}
	}
};

function restoreCommentedRows(parentNode) {
	for (var i = 0; i < parentNode.childNodes.length; i++) {
		var child = parentNode.childNodes[i];
		if(child.tagName === 'TBODY') {
			restoreCommentedRows(child);
			return;
		}

		if(child.nodeType === 8 && child.nodeValue.slice(0, MARKER.length) === MARKER) {
			var trHtml = child.nodeValue.slice(MARKER.length);
			var tr = util.makeElement(trHtml);
			parentNode.replaceChild(tr, child);
		}
	}
}


module.exports = filter;
