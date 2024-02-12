/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const leftArr = [];
  let lastMax = 0,
    sum = 0;
  for (let i = 0; i < height.length; i++) {
    const el = height[i];
    if (el >= lastMax) {
      lastMax = el;
      leftArr.push(0);
    } else leftArr.push(lastMax - el);
  }
  lastMax = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    const el = height[i];
    if (el >= lastMax) {
      lastMax = el;
      sum += Math.min(leftArr[i], 0);
    } else {
      leftArr.push(lastMax - el);
      sum += Math.min(leftArr[i], lastMax - el);
    }
  }
  return sum;
};

// let height = [0,1,0,2,1,0,1,3,2,1,2,1]
let height = [4, 2, 0, 3, 2, 5];

console.log(trap(height));
