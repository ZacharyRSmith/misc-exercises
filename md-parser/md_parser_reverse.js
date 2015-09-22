var EscapedChars = require('./node-modules/escaped_chars').EscapedChars,
    fs = require('fs');


var _parseOrderedLists = function (input) {
  var open_i = input.search('<ol>');

  // To work with edge cases, we could search starting at the open_i but meh
  var close_i = input.search('</ol>');

  while (open_i !== -1) {
    input = input.substring(0, open_i) +
            _transOrderedLists(input.substring(open_i, close_i + 5)) +
            input.substring(close_i + 5);
    open_i = input.search('<ol>');
    close_i = input.search('</ol>');
  }

  return input;
};

var _transOrderedLists = function (str) {
  str = str.replace('<ol>\n', '');

  var itemNum = 1;
  while (str.search('  <li>') !== -1) {
    str = str.replace('  <li>', itemNum + '. ');
    itemNum += 1;
  }
  return str.replace('</ol>', '');
};

function mdParserReverse (inputFilename, outputFilename) {
  var input = fs.readFileSync(inputFilename, 'utf8').trim();

  // Must come before replacing <li>:
  input = _parseOrderedLists(input);

  input = input.split('<p>').join('');
  input = input.split('</p>').join('\n');

  input = input.replace(/<h1>/g, '# ');
  input = input.replace(/<h2>/g, '## ');
  input = input.replace(/<h3>/g, '### ');
  input = input.replace(/<h4>/g, '#### ');
  input = input.replace(/<h5>/g, '##### ');
  input = input.replace(/<h6>/g, '###### ');

  input = input.replace(/<\/h1>/g, '\n');
  input = input.replace(/<\/h2>/g, '\n');
  input = input.replace(/<\/h3>/g, '\n');
  input = input.replace(/<\/h4>/g, '\n');
  input = input.replace(/<\/h5>/g, '\n');
  input = input.replace(/<\/h6>/g, '\n');

  input = input.replace(/<em>/g, '*');
  input = input.replace(/<\/em>/g, '*');

  input = input.replace(/  <li>/g, '* ');
  input = input.replace(/<\/li>/g, '');

  input = input.replace(/<strong>/g, '**');
  input = input.replace(/<\/strong>/g, '**');

  input = input.replace(/<ul>\n/g, '');
  input = input.replace(/<\/ul>/g, '');

  input = input.replace(/<code>/g, '`');
  input = input.replace(/<\/code>/g, '`');

  input = input.replace(/&lt;/g, '<');
  input = input.replace(/&gt;/g, '>');

  if (input.substr(input.length - 1) !== '\n') {
    input += '\n';
  }

  fs.writeFileSync(outputFilename, input);
}

module.exports.mdParserReverse = mdParserReverse;
