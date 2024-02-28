var topKFrequent = function(nums, k) {
    const map = new Map();
    
    nums.forEach(val => map.set(val, (map.get(val) || 0) + 1));
    
    let sortedNums = Array.from(new Set(nums))
    sortedNums.sort((a, b) => map.get(b) - map.get(a));
    
    return sortedNums.slice(0, k);
    };
let nums = [3,0,1,0];

console.log(topKFrequent(nums, 1));
