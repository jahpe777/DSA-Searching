'use strict';

const BinarySearchTree = require('./BST');
const Queue = require('./Queue');

// 1.

// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// 3, 5, 6, 8
// 6, 8
// 8
// it would take 4 steps

// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// 12, 14, 15, 17, 18
// 17, 18
// it would return null

function binarySearch(
  array = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18],
  value = 16,
  start,
  end
) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}
module.exports = binarySearch;
console.log(binarySearch());

//2.
//3.
//4.
//5.
//6.
//7.
//8.
