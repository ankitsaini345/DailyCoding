/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = root.val;
  const maxSum = (root) => {
    if (!root) return 0;
    let left = maxSum(root.left);
    let right = maxSum(root.right);
    max = Math.max(
      max,
      root.val + left + right,
      root.val + left,
      root.val + right,
      root.val
    );
    return Math.max(root.val + left, root.val + right, root.val);
  };
  maxSum(root);
  return max;
};
