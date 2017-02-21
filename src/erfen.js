var rank = function (key, arr, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length; }
    var mid = Math.floor((start + end) / 2);
    if (key < arr[mid - 1]) {
        return rank(key, arr, start, mid);
    }
    else if (key > arr[mid - 1]) {
        return rank(key, arr, mid, end);
    }
    else {
        return mid - 1;
    }
};
function sort(arr) {
    return arr.sort(function (a, b) { return a - b; });
}
