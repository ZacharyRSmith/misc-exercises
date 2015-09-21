var EscapedChars = require('./node-modules/escaped_chars').EscapedChars,
    fs = require('fs');


function mdParserReverse (inputFilename, outputFilename) {
  var input = fs.readFileSync(inputFilename, 'utf8').trim();

  input = input.split('<p>').join('');
  input = input.split('</p>').join('\n');

  fs.writeFileSync(outputFilename, input);
}

module.exports.mdParserReverse = mdParserReverse;
