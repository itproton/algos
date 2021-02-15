
const swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[i] = tmp;
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


const mergeSorted = (arr1, arr2, i = 0, j = 0, res = []) => {
    const [m, n] = [arr1.length, arr2.length];
    let i = j = k = 0;
    let res = []
    while (i < m && j < n) {
        if (arr1[i] < arr2[j]) {
            res[k++] = arr1[i++];
        } else {
            res[k++] = arr2[j++];
        }
    }
    while (i < m) {
        res[k++] = arr1[i++];
    }
    while (j < n) {
        res[k++] = arr2[j++];
    }
    return res;
}


const partition = (src, leftInc, rightInc) => {
    const pivotIndex = rightInc; // can be left/mid

}

module.exports = {
    insertionSort,
    mergeSorted
}