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
let max;
var diameterOfBinaryTree = function (root) {
  max = 0;
  maxDia(root);
  return max;
};

function maxDia(root) {
  let left = root.left ? 1 + maxDia(root.left) : 0;
  let right = root.right ? 1 + maxDia(root.right) : 0;
  max = Math.max(max, left + right);
  if (left > right) return left;
  else return right;
}
