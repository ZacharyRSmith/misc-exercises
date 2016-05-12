'use strict';
// rotate an NxN matrix by 90 degrees
// extra: rotate in place


function rotate (inputMatrix) {
  // for now, assume len === 3
  let newMatrix = [[], [], []];

  inputMatrix.forEach((row, i) => {
    row = row.split('');

    row.forEach((item, j) => {
      let newI = j;
      let newJ = 2 - i;

      newMatrix[newI][newJ] = item;
    });
  });

  return newMatrix.map(row => {
    return row.join('');
  });
}


const input = ['abc', '012', 'xyz'];
// abc
// 012
// xyz
const expected = ['x0a', 'y1b', 'z2c'];
// x0a
// y1b
// z2c

if (rotate(input).toString() !== expected.toString()) {
  console.error(`Expected "${rotate(input)}" to equal "${expected}"!`)
}
