/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let l = 1;
  let r = Math.max(...piles);
  let minTime = r;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    let sum = 0;
    for (let i = 0; i < piles.length; i++) {
      const element = piles[i];
      const time = (Math.ceil(element / m));
      sum += time
    }
    if (sum <= h) {
      minTime = Math.min(minTime, m);
      r = m - 1;
    } else l = m + 1;
  }
  return minTime;
};

const piles = [30, 11, 23, 4, 20],
  h = 6;

console.log(minEatingSpeed(piles, h));
