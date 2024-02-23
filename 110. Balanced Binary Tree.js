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
 * @return {boolean}
 */

var isBalanced = function (root) {
  let res = true;
  function isBal(root) {
    if (!root) return 0;
    const left = isBal(root.left);
    const right = isBal(root.right);
    if (Math.abs(left - right) > 1) res = false;
    return 1 + Math.max(left, right);
  }
  isBal(root);
  return res;
};
