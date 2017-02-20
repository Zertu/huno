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
    console.log(n)
    let x = 0,
        z = 1,
        w;
    for (let j = 0; j < n; j++) {
        console.log(x,w,z)
        w = z;
        z = x + z;
        x = w;
    }
    return z;
}