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

	reset: function () {
		this.code = Math.random();
		this.escapedChars = [];
	},

	unhide: function (str) {
		this.escapedChars.forEach(function (escapedChar) {
			str = str.replace(this.code, escapedChar);
		}, this);

		return str;
	}
};

module.exports.EscapedChars = new EscapedChars();
