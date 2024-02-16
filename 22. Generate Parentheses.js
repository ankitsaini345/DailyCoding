/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const output = [];
  genP("", 0, 0, n, output);
  return output;
};

function genP(str, open, close, n, output) {
  if (open == n && close == n) {
    output.push(str);
    return;
  }
  if (open < n) genP(str + "(", open + 1, close, n, output);
  if (close < open && close < n) genP(str + ")", open, close + 1, n, output);
}

const n=3;

console.log(generateParenthesis(n));