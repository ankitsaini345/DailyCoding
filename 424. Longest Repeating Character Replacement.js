/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let max = 0,
    currWinLength = 0,
    l = 0,
    r = 0,
    frequentCount = 0;
  let map = new Map();

  while (r < s.length) {
    let charCount = (map.get(s[r]) || 0) + 1;
    map.set(s[r], charCount);
    frequentCount = Math.max(frequentCount, charCount);
    currWinLength = r - l + 1;
    if (currWinLength - frequentCount > k) {
      map.set(s[l], map.get(s[l]) - 1);
      l++;
    }
    currWinLength = r - l + 1;
    max = Math.max(currWinLength, max)
    r++;
  }
  return max;
};

// const s = "ABAB",
//   k = 2;
(s = "AABABBA"), (k = 1);
console.log(characterReplacement(s, k));
