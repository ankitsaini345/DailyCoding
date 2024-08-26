/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let [l, r, maxArea] = [0, height.length - 1, 0];

    while (l < r) {
        let area = (r - l) * Math.min(height[l], height[r]);
        maxArea = Math.max(maxArea, area)
        if (height[l] < height[r]) l++;
        else r--;
    }
    return maxArea;
};