var wordCounter = require('./word_counter').wordCounter;

describe('wordCounter', function () {
	var expected = ['ab', 'bar', 'baz'];
	var str = 'fo0 fo0 fo0 foo a a a a bar "lorem ipsum" baz bar ab foo ab baz';
  var actual = wordCounter(str);

	it("should return 3 words", function () {
		expect(actual.length).toBe(expected.length);
	});

	it("should not count nonwords", function () {
		expect(actual.indexOf('fo0')).toBe(-1);
	});

  it("should not count filtered words", function () {
		// Exclude: I, you, he, she, it, we, they, them, a, an.
		expect(actual.indexOf('a')).toBe(-1);
	});

	it("should return words in expected order", function () {
		for (var i in actual)
			expect(actual[i]).toBe(expected[i]);
	});
});