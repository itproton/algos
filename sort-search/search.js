const binarySearch = (sortedArr, val) => {
    let low = 0;
    let high = sortedArr.length - 1;
    while (low <=/*!!!*/  high) {
        let mid = Math.floor((low + high) /*!!!*/ / 2);
        let guess = sortedArr[mid]; /*!!!*/
        if (guess === val) {
            return mid;
        }
        if (guess > val) {
            high = mid - 1
        } else {
            low = mid + 1;
        }
    }

    return null;

}


module.exports = {
    binarySearch
}