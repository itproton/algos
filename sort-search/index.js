const assert = require('assert').strict;

const { arr, arrSorted } = require('./data')
const { insertionSort, mergeSorted, mergeSortRecur, quickSortRecur } = require('./sort')
const { binarySearch } = require('./search')


console.log(quickSortRecur(arr))
console.log(binarySearch([1, 2, 3, 4, 5], 5))
// assert.deepEqual(insertSort(arr), [...arr].sort())