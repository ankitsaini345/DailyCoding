//https://www.naukri.com/code360/problems/frog-jump_3621012

// Recursive
function frogJump(n, heights, dp = new Array(n+1).fill(-1)) {
    if (n == 0) return 0;
    if (dp[n] != -1) return dp[n];
    let oneJump = frogJump(n - 1, heights, dp) + Math.abs(heights[n] - heights[n - 1])
    let twoJump = Number.MAX_SAFE_INTEGER;
    if (n > 1)
        twoJump = frogJump(n - 2, heights, dp) + Math.abs(heights[n] - heights[n - 2])

    return dp[n] = Math.min(oneJump, twoJump)
}

const heights = [10, 20, 30, 10], n = 3;
console.log(frogJump(n, heights));
