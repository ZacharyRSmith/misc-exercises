var fibonacci = require('./fibonacci').fibonacci;

describe('fibonacci', function () {
	it("should return [1] if given a max of 1", function () {
		expect(fibonacci(1)).toEqual([1]);
	});

	it("should return [1, 2] if given a max of 2", function () {
		expect(fibonacci(2)).toEqual([1, 2]);
	});

	it("should return [1, 2, 3] if given a max of 3 or 4", function () {
		expect(fibonacci(3)).toEqual([1, 2, 3]);
		expect(fibonacci(4)).toEqual([1, 2, 3]);
	});

	it("should return [1, 2, 3, 5] if given a max of 5, 6, or 7", function () {
		expect(fibonacci(5)).toEqual([1, 2, 3, 5]);
		expect(fibonacci(6)).toEqual([1, 2, 3, 5]);
		expect(fibonacci(7)).toEqual([1, 2, 3, 5]);
	});

	it("should return expected if given a max of 89", function () {
		expect(fibonacci(89)).toEqual([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
	});

	it("should get a sum of 44 from the even nums of a max 89 fibonacci", function () {
		expect(fibonacci(89).filter(function (n) {
			return n % 2 === 0;
		}).reduce(function (sum, n) {
			return sum + n;
		}, 0)).toBe(44);
	});
});
