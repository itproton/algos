const assert = require('assert').strict;

const { arr, arrSorted } = require('./data')
const { insertionSort, mergeSorted } = require('./sort')


console.log(mergeSorted([1, 4, 8, 21, 32], [4, 7, 12, 13, 99]))
// assert.deepEqual(insertSort(arr), [...arr].sort())