// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// For example,
// Given nums = [0, 1, 3] return 2.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums:number[]) {
    let arr = nums.sort((a,b)=>a-b)
    let i=0
    while(i<=arr.length){
        if(i!=arr[i]){
            return i
        }
        i++
    }
}
