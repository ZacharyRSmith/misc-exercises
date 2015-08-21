var fs = require('fs');


module.exports.genNewFilename = function (base, ext) {
	var i = 1,
			newFilename;

	while (true) {
		newFilename = base + '_' + i + ext;

		try {
			fs.openSync(newFilename, 'r');
		}
		catch (e) {
			if (e.code === 'ENOENT')
				break;
		}
		i += 1;
	}

	return newFilename;
};
