function quicksort(arr) {
    if (arr.length == 1)
        return arr;
    let flag = arr[Math.floor(arr.length / 2)], left = [], right = [];
    for (let i in arr) {
        if (arr[i] < flag) {
            right.push(arr[i]);
        }
        else {
            left.push[arr[i]];
        }
    }
    return quicksort(left).concat([flag], quicksort(right));
}
