var fs = require('fs');


module.exports.getInts = function (input) {
	var data = fs.readFileSync(input, 'utf8'),
			nums = { odds: { }, evens: { } };
	console.log('OK: ' + input);

	data.split(/\D+/).forEach(function (num) {
		if (!num)
			return;

		if (num % 2 === 0)
			nums.evens[num] = true;
		else
			nums.odds[num] = true;
	});

	return nums;
};
