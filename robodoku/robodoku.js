Array.prototype.remove = function (elt) {
	var i = this.indexOf(elt);

	if (i === -1)
		return;

	return this.splice(i, 1);
};

module.exports.robodoku = function (input) {
	var cols = { },
			remaining = [],
			rows = { },
			sqrs = { },
			lines = input.trim().split('\n');
	// Add placeholder so that for-loop/array counters can start from 1:
	lines.unshift('placeholder');

	for (var i = 1; i <= 9; i++) {
		cols[i] = [];
		rows[i] = [];
		sqrs[i] = [];
	}

	for (var y = 1; y <= 9; y++) {
		for (var x = 1; x <= 9; x++) {
			var initNum = parseInt(lines[y].substr(x-1, 1));
			var spot = new Spot(initNum, x, y, cols, rows, sqrs);

			if (!spot.num)
				remaining.push(spot);
		}
	}


	var c = 0;
	while (remaining.length > 0) {
		remaining.forEach(function (spot) {

			spot.col.forEach(function (colNeighbor) {
				if (colNeighbor === spot)
					return;

				if (colNeighbor.num)
					spot.candidates.remove(colNeighbor.num);
			});

			spot.row.forEach(function (rowNeighbor) {
				if (rowNeighbor === spot)
					return;

				if (rowNeighbor.num)
					spot.candidates.remove(rowNeighbor.num);
			});

			spot.sqr.forEach(function (sqrNeighbor) {
				if (sqrNeighbor === spot)
					return;

				if (sqrNeighbor.num)
					spot.candidates.remove(sqrNeighbor.num);
			});

			if (spot.candidates.length === 1) {
				remaining.remove(spot);
				spot.num = spot.candidates.pop();
			}
		});

		c += 1;
		if (c > 10000) {
			console.log("BREAK");
			break;
		}
	}

	var solution = '';

	Object.keys(rows).forEach(function (row) {
		rows[row].forEach(function (spot) {
			solution += spot.num;
		});
		solution += '\n';
	});

	// Use substr() to take off trailing '\n'.
	return solution.substr(0, solution.length - 1);
};

function Spot (initNum, x, y, cols, rows, sqrs) {
	this.num = (initNum || null);
	if (!initNum)
		this.candidates = [1,2,3,4,5,6,7,8,9];

	this.col = cols[x];
	this.col.push(this);
	this.row = rows[y];
	this.row.push(this);
	this.sqr = this._getSqr(x, y, sqrs);
	this.sqr.push(this);
}
Spot.prototype = {
	_getSqr: function (x, y, sqrs) {
		if (x <= 3) {
			if (y <= 3)
				return sqrs[1];
			else if (y <= 6)
				return sqrs[2];
			else
				return sqrs[3];
		}
		else if (x <= 6) {
			if (y <= 3)
				return sqrs[4];
			else if (y <= 6)
				return sqrs[5];
			else
				return sqrs[6];
		}
		else {
			if (y <= 3)
				return sqrs[7];
			else if (y <= 6)
				return sqrs[8];
			else
				return sqrs[9];
		}
	}
};
