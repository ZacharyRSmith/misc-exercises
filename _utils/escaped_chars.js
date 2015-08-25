function EscapedChars () {
	this.code = Math.random();
	this.escapedChars = [];
}
EscapedChars.prototype = {
	hide: function (str) {
		var i = str.indexOf('\\');

		while (i > -1) {
			this.escapedChars.push(str.substr(i, 2));
			str = str.replace(str.substr(i, 2), this.code);
			i = str.indexOf('\\');
		}

		return str;
	},

	unhide: function (str) {
		return this.escapedChars.reduce(function (str, escapedChar) {
			return str.replace(this.code, escapedChar);
		}, str);
	}
};

module.exports.EscapedChars = EscapedChars;
