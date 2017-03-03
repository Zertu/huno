// Given an array nums, there is a sliding window of size k which is moving from
// the very left of the array to the very right. You can only see the k numbers
// in the window. Each time the sliding window moves right by one position. For
// example, Given nums = [1,3,-1,-3,5,3,6,7], and k = 3. Window position
//        Max ---------------               ----- [1  3  -1] -3  5  3  6  7
//  3  1 [3  -1  -3] 5  3  6  7       3  1  3 [-1  -3  5] 3  6  7       5  1  3
// -1 [-3  5  3] 6  7       5  1  3  -1  -3 [5  3  6] 7       6  1  3  -1  -3  5
// [3  6  7]      7 Therefore, return the max sliding window as [3,3,5,5,6,7].
// Note: You may assume k is always valid, ie: 1 ≤ k ≤ input array's size for
// non-empty array.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    if (nums.length <= k) {
        if (k == 1) {
            return nums
        }else if(k==0){
                return nums
        }else{
            return [max(nums)]
        }
    }
    if (k == 1) {
        return nums
    }
    let maxbox = [],
        i = 0
    while (i < nums.length - k+1) {
        let temp = []
        console.log(i)
        for (let j = 0; j < k; j++) {
            temp.push(nums[i + j])
        }
        maxbox.push(max(temp))
        i++
    }
    return maxbox
}

function max(arr) {
    arr = arr.sort((a, b) => b - a)
    return arr[0]
}