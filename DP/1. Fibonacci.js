// Recursion Approach | Time: Exponential | space: Stack
function fibo(n) {
    if (n == 0 || n == 1)
        return n;
    return fibo(n - 1) + fibo(n - 2);
}

// Recursion with Memoisation (Top Down Approach) | Time: O(N) | Space: O(N) + Stack 
function fibo1(n, arr = new Array(n + 1).fill(-1)) {
    if (n == 0 || n == 1)
        return n;
    if (arr[n] != -1) return arr[n]

    return arr[n] = fibo(n - 1, arr) + fibo(n - 2, arr);
}

//Tabulation (Bottom up Approach) | Time: O(N) | Space: O(N), No Stack Space
function fibo2(n) {
    const arr = new Array(n + 1);
    arr[0] = 0;
    arr[1] = 1;

    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]
}

// Without Tabulation | Time: O(N) | No Space
// As we are only using last two values
function fibo2(n) {
    const arr = new Array(n + 1);

    let [p, pp] = [1, 0]
    let ans;

    for (let i = 2; i <= n; i++) {
        ans = p + pp;
        pp = p
        p = ans
    }
    return ans
}

console.log(fibo2(9));