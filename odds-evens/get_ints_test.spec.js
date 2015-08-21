var getInts = require('./get_ints').getInts;


describe('getInts', function () {
	it("should return expected", function () {
		var expected = { odds: { }, evens: { } };

		for (var i = 1; i <= 100; i++) {
			if (i % 2 === 0)
				expected.evens[i] = true;
			else
				expected.odds[i] = true;
		}

		// 'test_input.txt' has 2 copies of each int 1 - 100, inclusive.
		expect(getInts('test_input.txt')).toEqual(expected);
	});
});