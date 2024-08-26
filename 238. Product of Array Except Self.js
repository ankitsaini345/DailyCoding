/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let newArr = new Array(nums.length).fill(1);
    for(let i=1; i< nums.length; i++) {
        newArr[i] = newArr[i-1] * nums[i-1];
    }
    let temp = 1;
    for(let i= nums.length - 2; i >= 0; i--) {
        temp *= nums[i+1]
        newArr[i] *= temp;
    }
    return newArr;
};

const nums = [1,2,3,4];

console.log(productExceptSelf(nums));