/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let left = 0;
    let max = 0;

    for (let curr = 0; curr < s.length; curr++) {
        while (set.has(s[curr])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[curr]);
        max = Math.max(max , curr - left + 1);
    } 

    return max;
};

// const s = "abcabcbb";
// const s = "abba";
const s = "adfbbbbbbbbba";
// const s = "dvdf";

console.log(lengthOfLongestSubstring(s));
