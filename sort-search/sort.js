
const swap = (arr, i, j) => {
    [arr[i], , arr[j]] = [arr[j], arr[i]]
};

const insertionSort = (src) => {
    const arr = [...src];
    for (let i = 1; i < arr.length; i++) {
        let cur = arr[i];
        j = i - 1;
        while (j >= 0 && cur < arr[j]) {
            arr[j + 1] = arr[j]; // [2, 7, 5, 3] 3 => [2, 7, 5, 5] 
            console.log(arr)
            j = j - 1;
        }
        arr[j + 1] = cur;
    }
    // [3, 1, 5, 6, -2, 8]
    return arr;
}


// https://flaviocopes.com/merge-sort-javascript/
const merge = (arr1, arr2) => {
    const res = [];
    while (arr1.length && arr2.length) {
        res.push((arr1[0] > arr2[0]) ? arr2.shift() : arr1.shift());
    }
    arr1.length && res.push(...arr1);
    arr2.length && res.push(...arr2);
    return res;
}

const mergeSortRecur = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const m = Math.floor(arr.length / 2); // MIDPOINT
    return merge(
        mergeSortRecur(arr.slice(0, m)),
        mergeSortRecur(arr.slice(m, arr.length))
    )
}


const quickSortRecur = (src) => {
    const arr = [...src];
    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr[arr.length - 1]; // PIVOT
    const larger = arr.filter(e => e > pivot);
    const smaller = arr.filter(e => e < pivot);
    return [...quickSortRecur(smaller), pivot, ...quickSortRecur(larger)]
}

module.exports = {
    insertionSort,
    mergeSortRecur,
    quickSortRecur
}