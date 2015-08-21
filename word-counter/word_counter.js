function wordCounter (str) {
	var matches = str.match(/\b[a-z]+\b/ig).filter(function (match) {
		return ['i', 'you', 'he', 'she', 'it', 'we', 'they', 'them', 'a',
						'an'].indexOf(match.toLowerCase()) === -1;
	});
	// wordCounts will be like: { word: 1, otherWord: 2, foo: 5, bar: 2 }
	var wordCounts = _genWordCounts(matches);
	// Make sorted tuples like: [['foo', 5], ['bar', 2], ['otherWord', 2], ['word', 1]]
	var tuples = _genSortedTuples(wordCounts);

	return tuples.slice(0, 3).map(function (tup) {
		return tup[0];
	});
}

function _genSortedTuples (wordCounts) {
	var tuples = [];

	for (var word in wordCounts)
		tuples.push([word, wordCounts[word]]);

	tuples.sort(function (a, b) {
		var aCount = a[1];
		var bCount = b[1];
		var aWord  = a[0];
		var bWord  = b[0];

		// Sort to have highest count at beginning of array,
		// then alpha-sort with first letters at array's beginning.
		if (aCount < bCount)
			return 1;
		else if (aCount > bCount)
			return -1;
		else
			return _sortByWord(aWord, bWord);
	});

	return tuples;
}

function _genWordCounts (matches) {
	var wordCounts = {};

	for (var match in matches) {
		var word = matches[match].toLowerCase();

		if (!wordCounts[word])
			wordCounts[word] = 0;

		wordCounts[word] += 1;
	}

	return wordCounts;
}

function _sortByWord (aWord, bWord) {
	if (aWord < bWord)
		return -1;
	else if (aWord > bWord)
		return 1;
	else
		return 0;
}

module.exports.wordCounter = wordCounter;
