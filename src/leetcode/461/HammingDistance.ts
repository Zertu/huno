// The Hamming distance between two integers is the number of positions at which
// the corresponding bits are different. Given two integers x and y, calculate
// the Hamming distance.

// Note: 0 ≤ x, y < 231. Example: Input: x = 1, y = 4 Output: 2 Explanation: 1
// (0 0 0 1) 4   (0 1 0 0)        ↑   ↑ The above arrows point to positions
// where the corresponding bits are different.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    x = x.toString(2)
    y = y.toString(2)
    let count = 0
    if (x.length > y.length) {
        for (let i = 0; i < x.length; i++) {
            let xchar =x.charAt(i)
            let ychar = pad(y,x.length).charAt(i) || '0'
            if (xchar !== ychar) 
                count++
            }
        } else {
        for (let i = 0; i < y.length; i++) {
            let xchar = pad(x,y.length).charAt(i) || '0'
            let ychar = y.charAt(i)
            if (xchar !== ychar) 
                count++
            }
        }
    return count
};

function pad(num, n) {
    var len = num.length
    while(len < n) {
        num = "0" + num
        len++
    }
    return num
}