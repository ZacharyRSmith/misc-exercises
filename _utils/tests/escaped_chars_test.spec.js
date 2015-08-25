var EscapedChars = require('../escaped_chars').EscapedChars;


describe('EscapedChars', function () {
	var escapedChars = new EscapedChars();

	it("should hide and unhide escaped chars", function () {
		var str = 'foo\\bar';
		var encodedStr = escapedChars.hide(str);
		expect(encodedStr).toBe('foo' + escapedChars.code + 'ar');
		var changedStr = str.replace('r', 'z');
		expect(escapedChars.unhide(changedStr)).toBe('foo\\baz');
	});
});
