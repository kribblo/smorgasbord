var $ = require('jquery');
var sort = require('./sort');

$.fn.smorgasbord = function () {
	return this.each(function () {
		var table = this;
		var $table = $(table);

		function sortTable() {
			sort(table);
		}

		sortTable();
	});
};