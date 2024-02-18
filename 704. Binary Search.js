/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const index = Math.floor((l + r) / 2);
    if (nums[index] === target) return index;
    if (nums[index] < target) l = index + 1;
    else r = index - 1;
  }
  return -1;
};
