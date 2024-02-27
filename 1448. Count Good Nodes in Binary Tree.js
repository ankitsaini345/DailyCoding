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
var goodNodes = function (root) {
  let count = 0;
  let gnode = (root, val) => {
    if (!root) return;
    if (root.val >= val) {
      count++;
      val = root.val;
    }
    gnode(root.left, val);
    gnode(root.right, val);
  };
  gnode(root, root.val);
  return count;
};
