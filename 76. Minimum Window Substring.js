/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (!s || !t || s.length < t.length) return "";

  const currWindow = new Map();
  const mapStrT = new Map();

  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    mapStrT.set(ch, (mapStrT.get(ch) || 0) + 1);
  }

  let l = 0,
    r = 0;
  let need = mapStrT.size,
    have = 0;
  let resLen = s.length + 1,
    res = [];

  while (r < s.length) {
    let ch = s[r];
    currWindow.set(ch, (currWindow.get(ch) || 0) + 1);
    if (mapStrT.get(ch) && mapStrT.get(ch) === currWindow.get(ch)) {
      have++;
      while (need === have) {
        if (r - l + 1 < resLen) {
          resLen = r - l + 1;
          res = [l, r];
        }
        const leftCh = s[l++];
        currWindow.set(leftCh, currWindow.get(leftCh) - 1);
        if (mapStrT.get(leftCh) && mapStrT.get(leftCh) > currWindow.get(leftCh))
          have--;

        if (currWindow.get(leftCh) === 0) currWindow.delete(leftCh);
      }
    }
    r++;
  }
  if (resLen < s.length + 1) {
    return s.slice(res[0], res[1] + 1);
  }
  return "";
};

// const s = "ADOBECODEBANC",
//   t = "ABC";
const s = "bba",
  t = "ab";

console.log(minWindow(s, t));
