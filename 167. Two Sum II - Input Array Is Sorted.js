/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let [l, r] = [0, numbers.length - 1];

  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum == target) return [l+1, r+1];
    else if (sum < target) l++;
    else r--;
  }
};

const target = 9;
const numbers = [2, 7, 11, 15];
console.log(twoSum(numbers, target));
