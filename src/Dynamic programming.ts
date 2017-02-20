// leetcode 70题 
// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// 实际就是计算前3个数字的和


function climbStairs(n) {
    if (n < 1) {
        return 0
    }
    if (n == 1) {
        return 1
    }
    if (n == 2) {
        return 2
    } else {
        return fib3(n)
    }
}

function fib3(n) {
    let x = 0,
        z = 1,
        w
    for (let j = 0 ;j < n; j++) {
        w = z
        z = x + z
        x = w
    }
    return z
}