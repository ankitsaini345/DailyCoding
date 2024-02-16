/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const stack = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    const el = heights[i];
    if (stack.length) {
      let lastPopedIndex = i;
      while (stack.length && stack[stack.length - 1][0] > el) {
        lastItem = stack.pop();
        lastPopedIndex = lastItem[1];
        const area = (i - lastItem[1]) * lastItem[0];
        maxArea = Math.max(area, maxArea);
      }
      stack.push([el, lastPopedIndex]);
    } else stack.push([el, i]);
  }

  for (let i = 0; i < stack.length; i++) {
    const el = stack[i];
    maxArea = Math.max(maxArea, el[0] * (heights.length - el[1]));
  }

  return maxArea;
};

// const heights = [2, 1, 5, 6, 2, 3];
// const heights = [2, 4];
const heights = [2, 1, 2];

console.log(largestRectangleArea(heights));
