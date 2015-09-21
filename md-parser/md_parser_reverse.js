var EscapedChars = require('./node-modules/escaped_chars').EscapedChars,
    fs = require('fs');


function mdParserReverse (inputFilename, outputFilename) {
  var input = fs.readFileSync(inputFilename, 'utf8').trim();

  input = input.split('<p>').join('');
  input = input.split('</p>').join('\n');

  input = input.replace('<h1>', '# ');
  input = input.replace('<h2>', '## ');
  input = input.replace('<h3>', '### ');
  input = input.replace('<h4>', '#### ');
  input = input.replace('<h5>', '##### ');
  input = input.replace('<h6>', '###### ');

  input = input.replace('</h1>', '');
  input = input.replace('</h2>', '');
  input = input.replace('</h3>', '');
  input = input.replace('</h4>', '');
  input = input.replace('</h5>', '');
  input = input.replace('</h6>', '');

  if (input.substr(input.length - 1) !== '\n') {
    input += '\n';
  }

  fs.writeFileSync(outputFilename, input);
}

module.exports.mdParserReverse = mdParserReverse;
