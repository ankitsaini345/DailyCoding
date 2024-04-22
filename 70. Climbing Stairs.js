/**
 * @param {number} n
 * @return {number}
 */

//using DP & Recursion
// var climbStairs = function(n) {
//     const dp = new Array(n).fill(0);
//     return calc(n);

//     function calc(n) {
//         if (n <= 2) return n;
        
//         if(dp[n]) return dp[n];

//         dp[n-1] = calc(n-1);
//         dp[n-2] = calc(n-2);

//         return dp[n-1] + dp[n-2]
//     }
// };

// Using DP and Iteration
var climbStairs = function(n) {
    const dp = new Array(n).fill(0)
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i <= n; i++)
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n];
}; 

// // Fibonacci
// var climbStairs = function(n) {
//     if(n <=2 ) return n;
//     let lastSum = 2;
//     let sLastSum = 1;
//    for (let i = 3; i <= n; i++) {
//         let temp = lastSum;
//         lastSum  = lastSum + sLastSum;
//         sLastSum = temp;
//    }
//    return lastSum;
// }

console.log(climbStairs(5));