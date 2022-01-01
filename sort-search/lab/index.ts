const uarr = [32, -3, 17, 55, 0, -1, 23]
const arr = [...uarr].sort();
console.log('aaa')

const binSearch = (uarr, el) => {


    // 0. left/right = 0/len  => left<right => return undefined
    // 1. Find mid  [1, 4, 7, 10, 13, 23, 24, 40]
    // 2. check mid ===
    // 3. Decide > dig into left/right

    const arr = [...uarr];
    let left = 0;
    let right = arr.length;
    while (left < right) {
        let mid = (right - left) / 2; // overflow?
        console.log(`bb`, [right, left, mid])
        let midVal = arr[mid];
        if (midVal === el) {
            return mid
        }
        if (el <= midVal) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

    }
    return undefined;
};

console.log(arr, binSearch(arr, 17));
console.log('Foo')