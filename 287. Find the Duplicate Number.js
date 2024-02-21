/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let [slow, fast] = [nums[0], nums[nums[0]]];
  while (slow != fast) {
    [slow, fast] = [nums[slow], nums[nums[fast]]];
  }
  slow = 0;
  while (slow != fast) {
    [slow, fast] = [nums[slow], nums[fast]];
  }

  return slow;
};
