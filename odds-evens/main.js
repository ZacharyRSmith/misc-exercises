(function genOddsEvensFiles () {
	var fs = require('fs'),
			genNewFilename = require('./gen_new_filename').genNewFilename,
			getInts = require('./get_ints').getInts;
  var input = process.argv[2];

	if (!input) {
		console.log('ERROR. No valid input filename detected.\n' +
								'Usage: node ' + process.argv[1] + ' FILENAME');
		process.exit(1);
	}

	var ints = getInts(input),
			newEvensFilename = genNewFilename('evens', '.txt'),
			newOddsFilename  = genNewFilename('odds',  '.txt');

	for (var oddInt in ints.odds) {
		fs.appendFileSync(newOddsFilename, oddInt + '\n');
	}
	for (var evenInt in ints.evens) {
		fs.appendFileSync(newEvensFilename, evenInt + '\n');
	}
	console.log('Task completed! : D');
})();
