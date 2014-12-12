jest.dontMock('../src/util');

describe('util', function () {
	it('uppercases an array', function () {

		var util = require('../src/util');

		var inArray = ['OTHER', 'bands', 'pLaY', 'MAnoWar', 'kills'];

		var outArray = util.arrayToUpperCase(inArray);

		expect(outArray[0]).toBe('OTHER');
		expect(outArray[1]).toBe('BANDS');
		expect(outArray[2]).toBe('PLAY');
		expect(outArray[3]).toBe('MANOWAR');
		expect(outArray[4]).toBe('KILLS');
	});

	it('creates an element', function () {
		var util = require('../src/util');

		var html = '<table><tbody><tr><td id="cell">CELL</td></tr></tbody></table>';

		var table = util.makeElement(html);

		expect(table.getElementsByTagName('td')[0].textContent).toBe('CELL');
		expect(table.getElementsByTagName('td')[0].id).toBe('cell');

	});

	it('gets all body rows from a table', function () {
		var util = require('../src/util');

		var html1 =
			'<table>' +
			'<tr>' +
			'<td></td>' +
			'</tr>' +
			'<tr>' +
			'<td></td>' +
			'</tr>' +
			'</table>';

		var table1 = util.makeElement(html1);

		console.log("table1.tBodies.length", table1.tBodies.length);

		expect(util.getBodyRows(table1).length).toBe(2);

		var html2 =
			'<table>' +
			'<tbody>' +
			'<tr>' +
			'<td></td>' +
			'</tr>' +
			'<tr>' +
			'<td></td>' +
			'</tr>' +
			'<tr>' +
			'<td></td>' +
			'</tr>' +
			'</tbody>' +
			'</table>';

		var table2 = util.makeElement(html2);

		console.log("table2.tBodies.length", table2.tBodies.length);

		expect(util.getBodyRows(table2).length).toBe(3);

		var html3 =
			'<table>' +
			'<tbody>' +
			'<tr>' +
			'<td></td>' +
			'</tr>' +
			'<tr>' +
			'<td></td>' +
			'</tr>' +
			'</tbody>' +
			'<tbody>' +
			'<tr>' +
			'<td></td>' +
			'</tr>' +
			'<tr>' +
			'<td></td>' +
			'</tr>' +
			'</tbody>' +
			'</table>';

		var table3 = util.makeElement(html3);

		console.log("table3.tBodies.length", table3.tBodies.length);

		expect(util.getBodyRows(table3).length).toBe(4);

		var html4 =
			'<table>' +
			'<thead>' +
			'<tr>' +
			'<th></th>' +
			'</tr>' +
			'</thead>' +
			'<tbody>' +
			'<tr>' +
			'<td></td>' +
			'</tr>' +
			'<tr>' +
			'<td></td>' +
			'</tr>' +
			'</tbody>' +
			'<tbody>' +
			'<tr>' +
			'<td></td>' +
			'</tr>' +
			'<tr>' +
			'<td></td>' +
			'</tr>' +
			'</tbody>' +
			'</table>';

		var table4 = util.makeElement(html4);

		console.log("table4.tBodies.length", table4.tBodies.length);

		expect(util.getBodyRows(table4).length).toBe(4);

		var html5 =
			'<table>' +
			'<thead>' +
			'<tr>' +
			'<td></td>' +
			'</tr>' +
			'</thead>' +
			'<tr>' +
			'<td></td>' +
			'</tr>' +
			'</table>';

		var table5 = util.makeElement(html5);

		console.log("table5.tBodies.length", table5.tBodies.length);

		expect(util.getBodyRows(table5).length).toBe(1);

	});

});




