let rank = (key, arr) => {
    let mid = arr.length / 2;
    if (key < arr[mid]) {
        return rank(key, arr.splice(mid, mid));
    }
    else if (key > arr[mid]) {
        return rank(key, arr.splice(0, mid));
    }
    else {
        return mid;
    }
};
//# sourceMappingURL=erfen.js.map