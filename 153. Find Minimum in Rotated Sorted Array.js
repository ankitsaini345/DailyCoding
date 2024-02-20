/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while(l < r) {
        let mid  = Math.floor((l+r)/2);
        if(nums[l] < nums[r]) return nums[l];
        if(nums[mid] >= nums[l]) l = mid+1;
        else r = mid ;
    }
    return nums[l]
};

const nums = [1];
console.log(findMin(nums));
