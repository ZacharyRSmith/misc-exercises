module.exports.mergeSort = function (input) {
	var outerAry = input.map(function (elt) { return [elt]; });

	while (outerAry.length > 1) {
		var newOuterAry = [];

		for (var i = 0; i < outerAry.length - 1; i += 2) {
			var a = outerAry[i],
					b = outerAry[i + 1],
					aI = 0,
					bI = 0,
					newInnerAry = [];

			while (aI < a.length && bI < b.length) {
				if (a[aI] <= b[bI]) {
					newInnerAry.push(a[aI]);
					aI += 1;
				}
				else {
					newInnerAry.push(b[bI]);
					bI += 1;
				}
			}
			while (aI < a.length) {
				newInnerAry.push(a[aI]);
				aI += 1;
			}
			while (bI < b.length) {
				newInnerAry.push(b[bI]);
				bI += 1;
			}
			newOuterAry.push(newInnerAry);
		}

		if (outerAry.length % 2 !== 0)
			newOuterAry.push(outerAry[outerAry.length - 1]);

		outerAry = newOuterAry;
	}

	return outerAry.pop();
};
