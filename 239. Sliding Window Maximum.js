/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const numLen = nums.length;
  let l = 0,
    r = 0;
  const deQueue = [];
  const output = [];

  while (r < numLen) {
    while (deQueue.length && nums[r] > nums[deQueue[deQueue.length-1]]) {
      deQueue.pop();
    }
    deQueue.push(r);

    if (r - l + 1 >= k) {
      output.push(nums[deQueue[0]]);
      l++;
      if (deQueue[0] < l) deQueue.shift();
    }
    r++;
  }
  return output;
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
// const nums = [1,3,1,2,0,5],
//   k = 3;

console.log(maxSlidingWindow(nums, k));
