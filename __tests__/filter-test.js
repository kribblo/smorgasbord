jest.dontMock('../src/util');
jest.dontMock('../src/filter');

describe('filter', function () {
	it('filters a table', function () {

		document.body.innerHTML =
			'<table>' +
			'<tr>' +
			'<td>Test row 1</td>' +
			'</tr>' +
			'<tr>' +
			'<td>Test row 2</td>' +
			'</tr>' +
			'<tr>' +
			'<td>Something different</td>' +
			'</tr>' +
			'</table>';
		runFilterTests();
	});

	it('filters a table with explicit tbody', function () {

		document.body.innerHTML =
			'<table>' +
			'<tbody>' +
			'<tr>' +
			'<td>Test row 1</td>' +
			'</tr>' +
			'<tr>' +
			'<td>Test row 2</td>' +
			'</tr>' +
			'<tr>' +
			'<td>Something different</td>' +
			'</tr>' +
			'</tbody>' +
			'</table>';
		runFilterTests();
	});

	it('filters a table skipping thead', function () {

		document.body.innerHTML =
			'<table>' +
			'<thead>' +
			'<th>HEADER</th>' +
			'</thead>' +
			'<tbody>' +
			'<tr>' +
			'<td>Test row 1</td>' +
			'</tr>' +
			'<tr>' +
			'<td>Test row 2</td>' +
			'</tr>' +
			'<tr>' +
			'<td>Something different</td>' +
			'</tr>' +
			'</tbody>' +
			'</table>';
		runFilterTests();
	});

	function runFilterTests() {
		var filter = require('../src/filter');
		var table = document.getElementsByTagName('table')[0];

		filter(table, ['row 1'], {});

		expect(table.getElementsByTagName('tr').length).toBe(1);
		var cell1 = table.getElementsByTagName('td')[0];
		expect(cell1.textContent).toBe('Test row 1');

		filter(table, ['row 2'], {});

		expect(table.getElementsByTagName('tr').length).toBe(1);
		var cell2 = table.getElementsByTagName('td')[0];
		expect(cell2.textContent).toBe('Test row 2');

		filter(table, ['row 1'], {});

		expect(table.getElementsByTagName('tr').length).toBe(1);
		var cell3 = table.getElementsByTagName('td')[0];
		expect(cell3.textContent).toBe('Test row 1');

		filter(table, ['row 8'], {});

		expect(table.getElementsByTagName('tr').length).toBe(0);

		filter(table, ['row', '1'], {});

		expect(table.getElementsByTagName('tr').length).toBe(1);
		var cell4 = table.getElementsByTagName('td')[0];
		expect(cell4.textContent).toBe('Test row 1');

		filter(table, ['row'], {});

		expect(table.getElementsByTagName('tr').length).toBe(2);
		var cell5 = table.getElementsByTagName('td')[0];
		expect(cell5.textContent).toBe('Test row 1');
		var cell6 = table.getElementsByTagName('td')[1];
		expect(cell6.textContent).toBe('Test row 2');
	}
});




