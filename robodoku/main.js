var fs = require('fs'),
		robodoku = require('./robodoku').robodoku;
var puzzleFilename = process.argv[2];


if (!puzzleFilename) {
	console.log('ERROR. No valid puzzle filename detected.\n' +
							'Usage: node ' + process.argv[1] + ' FILENAME');
	process.exit(1);
}

var puzzle = fs.readFileSync(puzzleFilename, 'utf8');
solution = robodoku(puzzle);
console.log(solution);
