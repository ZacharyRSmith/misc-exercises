var fs = require('fs'),
		wordSnake = require('./word_snake').wordSnake;


describe('wordSnake', function () {
	it("should return a word snake", function () {
		var words = "foobars snafus sos so";
		var	expected = "foobars\n" +
				           "      n\n" +
									 "      a\n" +
									 "      f\n" +
									 "      u\n" +
									 "      sos\n" +
									 "        o";
		expect(wordSnake(words)).toBe(expected);
	});
});
