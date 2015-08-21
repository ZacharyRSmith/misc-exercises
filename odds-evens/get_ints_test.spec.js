var getInts = require('./get_ints').getInts;

describe('getInts', function () {
	var expected = { odds: { }, evens: { } };

	for (var i = 1; i <= 100; i++) {
		if (i % 2 === 0)
			expected.evens[i] = true;
		else
			expected.odds[i] = true;
	}

	it("should return expected", function () {
		expect(getInts('input.txt')).toEqual(expected);
	});
});