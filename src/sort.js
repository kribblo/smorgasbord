var util = require('./util');

var directions = {
	ASCENDING: 'ASCENDING',
	DESCENDING: 'DESCENDING'
};

// TODO: AUTO, CASE INSENSITIVE, LOCALES https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare#Parameters
var types = {
	ALPHABETIC: 'ALPHABETIC',
	NUMERIC: 'NUMERIC',
	AMERICAN_DATE: 'AMERICAN DATE'
};

var sort = function sort(table, column, options) {
	'use strict';

	var defaultOptions = {
		type: types.ALPHABETIC,
		direction: directions.ASCENDING
	};

	options = util.mergeOptions(options, defaultOptions);

	var rows = table.rows;
	var indexedRows = [];

	for (var i = 0; i < rows.length; i++) {
		var row = rows[i];

		var parentTagName = row.parentNode.tagName;
		if (parentTagName === 'THEAD' || parentTagName === 'TFOOT') {
			continue;
		}

		var cell = row.cells[column];
		var cellText = cell.textContent;

		indexedRows.push([cellText, row]);
	}

	if (types.NUMERIC === options.type) {
		indexedRows.sort(numericSort);
	} else {
		indexedRows.sort(alphaSort);
	}

	if (directions.DESCENDING === options.direction) {
		indexedRows.reverse();
	}

	replaceRows(indexedRows);

	function replaceRows(indexedRows) {
		for (var j = 0; j < indexedRows.length; j++) {
			var row = indexedRows[j][1];
			var parentNode = row.parentNode;
			parentNode.removeChild(row);
			parentNode.appendChild(row);
		}
	}

	function alphaSort(x, y) {
		return x[0].localeCompare(y[0]);
	}

	function numericSort(x, y) {
		return x[0] - y[0];
	}

};

sort.types = types;
sort.directions = directions;


module.exports = sort;
