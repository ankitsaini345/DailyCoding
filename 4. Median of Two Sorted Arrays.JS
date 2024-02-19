/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arrS = nums1;
  let arrL = nums2;

  if (arrS.length > arrL.length) [arrS, arrL] = [nums2, nums1];

  const totalLength = arrS.length + arrL.length;
  const smallLength = arrS.length;
  const halfLength = Math.floor(totalLength / 2);

  let leftS = Math.floor(smallLength / 2);
  let leftL = halfLength - leftS;
  leftS--;
  leftL--;
  while (true) {
    let arrSleft =  leftS >= 0 ? arrS[leftS] : Number.NEGATIVE_INFINITY;
    let arrSright = leftS + 1 < arrS.length ? arrS[leftS + 1] : Number.POSITIVE_INFINITY;
    let arrLleft = leftL >= 0 ? arrL[leftL] : Number.NEGATIVE_INFINITY;
    let arrLright = leftL + 1 < arrL.length ? arrL[leftL + 1] : Number.POSITIVE_INFINITY;

    if (arrSleft <= arrLright && arrLleft <= arrSright) {
      if (totalLength % 2) {
        return Math.min(arrSright, arrLright);
      } else
        return (
          (Math.max(arrSleft, arrLleft) + Math.min(arrSright, arrLright)) / 2
        );
    } else if (arrSleft > arrLright) {
      leftS--;
      leftL++;
    } else {
      leftS++;
      leftL--;
    }
  }
};

// const nums1 = [1, 2, 3, 4, 5, 8, 9],
//   nums2 = [1, 3, 4, 5, 6, 7];
const nums1 = [0,0],
  nums2 = [0,0];

console.log(findMedianSortedArrays(nums1, nums2));
