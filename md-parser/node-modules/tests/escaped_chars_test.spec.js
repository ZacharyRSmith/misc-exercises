var EscapedChars = require('../escaped_chars').EscapedChars;


describe('EscapedChars', function () {
	it("should hide and unhide escaped chars", function () {
		var str = 'foo\\bar';
		var encodedStr = EscapedChars.hide(str);
		expect(encodedStr).toBe('foo' + EscapedChars.code + 'ar');
		var changedStr = encodedStr.replace('r', 'z');
		expect(EscapedChars.unhide(changedStr)).toBe('foo\\baz');
	});
});
