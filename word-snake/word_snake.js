module.exports.wordSnake = function (wordsStr) {
	var col = 0,
			res = '',
			words = wordsStr.split(/\W+/);

	col += words[0].length;
	res += words[0] + '\n';

	for (var i = 1; i < words.length; i++) {
		if (i % 2 === 0) {
			res += words[i].substring(1) + '\n';
			col += words[i].length - 1;
		}
		else
			res += _goDown(words[i], col);
	}

	return res;
};

function _goDown (word, col) {
	var res = word.substring(1).split('').reduce(function (res, ltr) {
		return res + _pad(ltr, col) + '\n';
	}, '');

	// Take off the trailing newline character:
	return res.substr(0, res.length - 1);
}

function _pad (str, col) {
	return Array(col).join(' ') + str;
}
