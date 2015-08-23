function fibonacci (max) {
	if (max === 1)
		return [1];
	if (max === 2)
		return [1, 2];

	var ary = [1, 2],
			crnt,
			last,
			secondToLast;

	while (true) {
		secondToLast = ary.slice(-2, -1).pop();
		last = ary.slice(-1).pop();
		crnt = secondToLast + last;

		if (crnt > max)
			break;

		ary.push(secondToLast + last);
	}

	return ary;
}

module.exports.fibonacci = fibonacci;
