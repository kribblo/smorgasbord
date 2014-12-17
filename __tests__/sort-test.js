jest.dontMock('../src/util');
jest.dontMock('../src/sort');

var sort = require('../src/sort');

describe('sort', function () {
	it('exports types and directions', function() {

		expect(sort.types.ALPHABETIC).toBe('ALPHABETIC');
		expect(sort.directions.ASCENDING).toBe('ASCENDING');
	});

	it('sorts a table alphabetically and case sensitive', function () {

		document.body.innerHTML =
			'<table id="table">' +
			'<tr>' +
			'<td>Test cell 1</td>' +
			'<td>321</td>' +
			'</tr>' +
			'<tr>' +
			'<td>Test cell 2</td>' +
			'<td>2</td>' +
			'</tr>' +
			'<tr>' +
			'<td>Something different</td>' +
			'<td>123</td>' +
			'</tr>' +
			'<tr>' +
			'<td>TEST CELL 4</td>' +
			'<td>666</td>' +
			'</tr>' +
			'</table>';


		var table = document.getElementById('table');

		sort(table, 0);

		/*jshint -W030*/ // Update jsdom table indices, see issue https://github.com/tmpvar/jsdom/issues/742
		table.rows.length;

		expect(table.rows[0].cells[0].textContent).toBe('Something different');
		expect(table.rows[0].cells[1].textContent).toBe('123');

		sort(table, 0, {direction: sort.directions.DESCENDING});

		/*jshint -W030*/ // Update jsdom table indices, see issue https://github.com/tmpvar/jsdom/issues/742
		table.rows.length;

		expect(table.rows[0].cells[0].textContent).toBe('Test cell 2');
		expect(table.rows[0].cells[1].textContent).toBe('2');

	});

	it('sorts a table numerically', function () {

		document.body.innerHTML =
			'<table id="table">' +
			'<tr>' +
			'<td>Test cell 1</td>' +
			'<td>321</td>' +
			'</tr>' +
			'<tr>' +
			'<td>Test cell 2</td>' +
			'<td>2</td>' +
			'</tr>' +
			'<tr>' +
			'<td>Something different</td>' +
			'<td>123</td>' +
			'</tr>' +
			'<tr>' +
			'<td>TEST CELL 4</td>' +
			'<td>666</td>' +
			'</tr>' +
			'</table>';


		var table = document.getElementById('table');

		sort(table, 1, {type: sort.types.NUMERIC});

		/*jshint -W030*/ // Update jsdom table indices, see issue https://github.com/tmpvar/jsdom/issues/742
		table.rows.length;

		expect(table.rows[0].cells[0].textContent).toBe('Test cell 2');
		expect(table.rows[0].cells[1].textContent).toBe('2');


		sort(table, 1, {type: sort.types.NUMERIC, direction: sort.directions.DESCENDING});

		/*jshint -W030*/ // Update jsdom table indices, see issue https://github.com/tmpvar/jsdom/issues/742
		table.rows.length;

		expect(table.rows[0].cells[0].textContent).toBe('TEST CELL 4');
		expect(table.rows[0].cells[1].textContent).toBe('666');

	});
});
