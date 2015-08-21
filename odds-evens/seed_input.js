var fs = require('fs');


(function _seedInput () {
	fs.openSync('./input.txt', 'w');

	for (var i = 1; i <= 100; i++) {
		fs.appendFileSync('input.txt', i + '\n');
	}
})();
