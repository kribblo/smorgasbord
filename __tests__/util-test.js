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

	it('creates an element', function() {
		var util = require('../src/util');

		var html = '<table><tbody><tr><td id="cell">CELL</td></tr></tbody>';

		var table = util.makeElement(html);

		expect(table.getElementsByTagName('td')[0].textContent).toBe('CELL');
		expect(table.getElementsByTagName('td')[0].id).toBe('cell');

	});
});




