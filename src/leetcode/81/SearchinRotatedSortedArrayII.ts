// Suppose an array sorted in ascending order is rotated at some pivot unknown
// to you beforehand. (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2). Write a
// function to determine if a given target is in the array. The array may
// contain duplicates.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    if (nums.length <= 3) {
        for (let i = 0; i <= nums.length; i++) {
            if (nums[i] == target) {
                return true
            }
        }
        return false
    }
    nums= quicksort(dedupe(nums))
    return ranks(nums, target) >= 0
}

let ranks = (arr : number[], key : number) => {
    let mid = Math.floor(arr.length / 2)
    console.log(arr)
    if (mid <= 1) {
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] == key) {
                return 1
            }
        }
        return -1
    }
    if (key < arr[mid - 1]) {
        return ranks(arr.splice(0, mid), key)
    } else if (key > arr[mid - 1]) {
        return ranks(arr.splice(mid, arr.length - mid), key)
    } else if (key === arr[mid - 1]) {
        return mid - 1;
    } else {
        return -1
    }
}


function dedupe(array) {
    return Array.from(new Set(array));
}
function quicksort(arr : number[]) : number[] {
    if (arr.length <= 1) 
        return arr
    let flag = arr[Math.floor(arr.length / 2)],
        left = [],
        right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < flag) {
            left.push(arr[i]);
        } else if (arr[i] > flag) {
            right.push(arr[i]);
        }
    }

    return quicksort(left).concat([flag], quicksort(right))
}
