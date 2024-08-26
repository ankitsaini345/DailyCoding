
//O(nlogn)
var topKFrequent1 = function (nums, k) {
    const map = new Map();

    nums.forEach(val => map.set(val, (map.get(val) || 0) + 1));

    let sortedNums = Array.from(new Set(nums))
    sortedNums.sort((a, b) => map.get(b) - map.get(a));

    return sortedNums.slice(0, k);
};

//O(n)
var topKFrequent = function (nums, k) {
    const map = new Map();
    const freq = new Array(nums.length + 1);
    const ans = [];
    for (el of nums)
        map.set(el, (map.get(el) || 0) + 1);

    for ([el, count] of map) {
        if (freq[count]) freq[count].push(el)
        else freq[count] = [el]
    }

    let i = nums.length;
    while (k && i) {
        if (freq[i])
            freq[i].forEach((el) => {
                k--;
                ans.push(el)
            })
        i--;

    }
    return ans;
};

let nums = [3, 0, 1, 0];

console.log(topKFrequent(nums, 1));
