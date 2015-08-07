var evens = {};
var odds  = {};

var str = ' 01 34 42 34  ';

function getMatch (str) { return /\b\d+\b/.exec(str); }

while (true) {
  var match = getMatch(str);

  // Came to end of input:
  if (!match) { break; }

  var int = match[0];
  var index = match.index;

  if (int % 2 === 0) {
    if (!evens[int]) { evens[int] = 1; }
    else { evens[int] += 1; }
  } else {
    if (!odds[int]) { odds[int] = 1; }
    else { odds[int] += 1; }
  }

  str = str.substr(index + int.length);
}

console.log(evens['34'] === 2);
console.log(evens['42'] === 1);
console.log(odds['01'] === 1 );
