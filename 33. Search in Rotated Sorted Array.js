/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length-1;
    while (l<=r) {
        let mid = Math.floor((l+r)/2);
        if(nums[mid] === target) return mid;
        if(nums[l] <= nums[mid]) {
            if(nums[l] <= target && target < nums[mid])
                r = mid;
            else l = mid + 1;
        }
        if(nums[mid] < nums[r]) {
            if(nums[mid] < target && target <= nums[r])     
                l = mid+1;
            else r = mid
        }
    }
    // if(nums[0] === target) return 0
    return -1;
};

// const nums = [4,5,6,7,0,1,2], target = 0
const nums = [1], target = 0

console.log(search(nums, target));