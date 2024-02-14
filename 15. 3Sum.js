/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (nums[left] == nums[left + 1] && left < nums.length) left++;
        while (nums[right] == nums[right - 1] && right > 0) right--;
        left++;
        right--;
      } else if (sum > 0) right--;
      else left++;
    }
  }

  return res;
};

const nums = [0, 0, 0, 0, 0, 0, 0];
console.log(threeSum(nums));
