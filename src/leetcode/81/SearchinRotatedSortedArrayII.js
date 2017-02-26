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
    return ranks(nums, target);
};
var ranks = function (nums, target) {
    var head = 0, tail = nums.length;
    while (head < tail) {
        var mid = Math.floor((head + tail) / 2);
        if (nums[mid] == target) {
            return true;
        }
        if (nums[mid] > nums[head]) {
            if (target < nums[mid] && target >= nums[head]) {
                tail = mid;
            }
            else {
                head = mid + 1;
            }
        }
        else if (nums[mid] < nums[head]) {
            if (target > nums[mid] && target < nums[head]) {
                head = mid + 1;
            }
            else {
                tail = mid;
            }
        }
        else {
            head++;
        }
    }
    return false;
};
