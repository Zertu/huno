// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

// Note:
// Each element in the result must be unique.
// The result can be in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let intersections = [];
    let arr1 = dedupe(nums1.sort(function (a, b) { return a < b; }));
    let arr2 = dedupe(nums2.sort(function (a, b) { return a < b; }));
    for (let i = 0; i < arr1.length; i++) {
        for(let j=0;j<arr2.length;j++){
            
            console.log(arr1[i],arr2[j])
            if(arr1[i]==arr2[j]){
                intersections.push(arr1[i])
                break
            }else if(arr1[i]<arr2[j]){
                continue
            }
        }
    }
    return intersections
};
function dedupe(array) {
    return Array.from(new Set(array));
}
