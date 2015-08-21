var mergeSort = require('./merge_sort').mergeSort;

describe('mergeSort', function () {
	it("should sort an input array", function () {
		var expected = [1,2,3,4,5,6,7,8,9,10],
				input = [5,4,3,2,1,6,7,10,9,8];
		expect(mergeSort(input)).toEqual(expected);
	});
});