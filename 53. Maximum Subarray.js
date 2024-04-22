/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let [r, maxSum, sum] = [1, nums[0], nums[0]];

  while (r < nums.length) {
    if (sum + nums[r] <= nums[r]) sum = nums[r];
    else sum += nums[r];
    maxSum = Math.max(sum, maxSum);
    r++;
  }
  return maxSum;
};

const nums = [5, 4, -1, 7, 8];
// const nums = [1,2];
// const nums = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(nums));
