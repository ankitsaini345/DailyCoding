/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n)
var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let maxSeqLength = 0;

    set.forEach((item) => {
        if(set.has(item-1)) return; //item is a part of different sequence

        let currentSeqLength = 1;
        while(set.has(item + 1)) {
            currentSeqLength++;
            item++;
        }
        maxSeqLength = Math.max(maxSeqLength, currentSeqLength);
    })

    return maxSeqLength;
}


// O(nlogn)
// var longestConsecutive = function (nums) {
//   let size = nums.length;
//   if (!size) return 0;

//   nums.sort((a, b) => a - b);
//   let lcs = 1,
//     currentLcs = 1;
//   for (let i = 1; i < size; i++) {
//     if (nums[i] - nums[i - 1] === 0) continue;
//     if (nums[i] - nums[i - 1] === 1) {
//       currentLcs++;
//     } else {
//       if (currentLcs > lcs) lcs = currentLcs;
//       currentLcs = 1;
//     }
//   }
//   if (currentLcs > lcs) lcs = currentLcs;
//   return lcs;
// };

nums = [100, 4, 200, 1, 3, 2];
// nums = [1,2,0,1];

console.log(longestConsecutive(nums));
