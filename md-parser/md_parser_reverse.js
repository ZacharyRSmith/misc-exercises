var EscapedChars = require('./node-modules/escaped_chars').EscapedChars,
    fs = require('fs');


function mdParserReverse (inputFilename, outputFilename) {
  var input = fs.readFileSync(inputFilename, 'utf8').trim();

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
