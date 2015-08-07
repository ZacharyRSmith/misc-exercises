// I have text and want to know "What are the three most common words?"
// Exclude: I, you, he, she, it, we, they, them, a, an.

function getCommonWords (str) {
  var matches = str.match(/\b[a-z]+\b/ig);
  var wordCounts = genWordCounts(matches);
  var tuples = genTuples(wordCounts);

  return tuples.slice(0, 3);
}

function genTuples (wordCounts) {
  var tuples = [];

  for (var word in wordCounts) { tuples.push([word, wordCounts[word]]); }

  tuples.sort(function (a, b) {
    var aCount = a[1];
    var bCount = b[1];
    var aWord  = a[0];
    var bWord  = b[0];

    // Sort to have highest count at beginning of array,
    // then alpha-sort case-insensitive, with first letters at array's beginning.
    if (aCount < bCount) {
      return 1;
    } else if (aCount > bCount) {
      return -1;
    } else {
      return sortByWord(aWord.toLowerCase(), bWord.toLowerCase());
    }
  });

  return tuples;
}

function genWordCounts (matches) {
  var wordCounts = {};
  var wordFilter = ['I', 'you', 'he', 'she', 'it',
                    'we', 'they', 'them', 'a', 'an'];

  for (var match in matches) {
    var word = matches[match];

    if (wordFilter.indexOf(word) !== -1) { continue; }

    if (!wordCounts[word]) { wordCounts[word] = 1; }
    else { wordCounts[word] += 1; }
  }

  return wordCounts;
}

function sortByWord (aWord, bWord) {
  if (aWord < bWord) {
    return -1;
  } else if (aWord > bWord) {
    return 1;
  } else {
    return 0;
  }
}

// TEST:
// a's should not be in result due to wordFilter in #genWordCounts
// fo0 should not count due to number
var str = 'fo0 foo a a a a bar "lorem ipsum" baz bar ab foo ab baz';
var rslt = getCommonWords(str);
var expected = ['ab', 'bar', 'baz'];

if (expected.length !== rslt.length) { throw new Error(); }

for (var tuple in rslt) {
  if (expected.indexOf(rslt[tuple][0]) === -1) {
    throw new Error("Tuple '" + rslt[tuple] + "' not expected.");
  }
}
