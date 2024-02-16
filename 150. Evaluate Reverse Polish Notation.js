/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === "+") {
      const second = +stack.pop();
      const first = +stack.pop();
      stack.push(first + second);
    } else if (token === "-") {
      const second = +stack.pop();
      const first = +stack.pop();
      stack.push(first - second);
    } else if (token === "*") {
      const second = +stack.pop();
      const first = +stack.pop();
      stack.push(first * second);
    } else if (token === "/") {
      const second = +stack.pop();
      const first = +stack.pop();
      stack.push(Math.trunc(first / second));
    } else stack.push(token);
  }
  return stack.pop();
};

// const tokens = ["2","1","+","3","*"];
// const tokens = ["4", "13", "5", "/", "+"];
const tokens = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];

console.log(evalRPN(tokens));
