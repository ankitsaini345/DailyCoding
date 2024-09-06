/**
 * @param {number} n
 * @return {number}
 */

// Optimised Approach
var climbStairs = function (n) {
    if (n == 1 || n == 2) return n;
    let [p, pp] = [2, 1];
    let ans;
    for (let i = 3; i <= n; i++) {
        ans = p + pp;
        pp = p
        p = ans;
    }
    return ans;
};

// recursion
var climbStairs = function (n) {
    if (n == 0 || n == 1 || n == 2) return n;

    return climbStairs(n - 1) + climbStairs(n - 2)
};