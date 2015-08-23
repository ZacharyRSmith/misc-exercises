var EscapedChars = require('./node-modules/escaped_chars').EscapedChars,
		fs = require('fs');


function mdParser (inputFilename, outputFilename) {
	var chunks = fs.readFileSync(inputFilename, 'utf8').trim().split('\n\n');

	var output = _format(chunks).reduce(function (output, chunk) {
		return output + chunk + '\n';
	}, '');

	fs.writeFileSync(outputFilename, output);
}

function _format (chunks) {
	return chunks.map(function (chunk) {
		EscapedChars.reset();
		chunk = EscapedChars.hide(chunk);
		chunk = chunk.split('<').join('&lt;');
		chunk = chunk.split('>').join('&gt;');
		chunk = _wrap(chunk);
		chunk = _parseIntoTag(chunk, '**', 'strong');
		chunk = _parseIntoTag(chunk, '*', 'em');
		chunk = _parseIntoTag(chunk, '`', 'code');
		chunk = EscapedChars.unhide(chunk);
		chunk = chunk.split('\\').join('');

		return chunk;
	});
}

function _parseIntoTag (chunk, match, tagName) {
	var countTags = 0;

	while (chunk.indexOf(match) > -1) {
		if (countTags % 2 === 0)
			chunk = chunk.replace(match, '<' + tagName + '>');
		else
			chunk = chunk.replace(match, '</' + tagName + '>');

		countTags += 1;
	}

	// Close off dangling tags.
	if (countTags % 2 !== 0)
		chunk += '</' + tagName + '>';

	return chunk;
}

function _headerify (chunk) {
	var headerLevel = 0;

	while (chunk.substr(0, 1) === '#') {
		chunk = chunk.substring(1);
		headerLevel += 1;
	}

	return '<h' + headerLevel + '>' + chunk.trim() + '</h' + headerLevel + '>';
}

function _listifyOl (chunk) {
	var items = chunk.trim().split('\n'),
			res = '<ol>\n';

	res = items.reduce(function (res, item) {
		return res + '  <li>' + item.substr(3) + '</li>\n';
	}, res);

	return res + '</ol>';
}

function _listifyUl (chunk) {
	var items = chunk.trim().split('\n'),
			res = '<ul>\n';

	res = items.reduce(function (res, item) {
		return res + '  <li>' + item.substr(2) + '</li>\n';
	}, res);

	return res + '</ul>';
}

function _wrap (chunk) {
	if (chunk.substr(0, 1) === '#')
		return _headerify(chunk);
	else if (chunk.substr(0, 2) === '* ')
		return _listifyUl(chunk);
	else if (chunk.substr(0, 3) === '1. ')
		return _listifyOl(chunk);
	else
		return '<p>' + chunk + '</p>';
}

module.exports.mdParser = mdParser;
