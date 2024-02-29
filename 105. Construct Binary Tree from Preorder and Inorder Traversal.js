/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// var buildTree = function (preorder, inorder) {
//   let rIndex = 0;
//   let bt = (l, r) => {
//     const rootVal = preorder[rIndex++];
//     const root = new TreeNode(rootVal);
//     const index = inorder.indexOf(rootVal);
//     if(index > l) root.left = bt(l, index - 1);
//     if(index < r) root.right = bt(index + 1, r);
//     return root;
//   };
//   return bt(0, preorder.length-1);
// };

// 2nd way

var buildTree = function (preorder, inorder, l = 0, r = inorder.length) {
    const rootVal = preorder.shift();
    if(rootVal == undefined) return null;
    const root = new TreeNode(rootVal);
    const index = inorder.indexOf(rootVal);
    if (index > l) root.left = buildTree(preorder, inorder,l, index - 1);
    if (index < r) root.right = buildTree(preorder, inorder,index + 1, r);
    return root;
  };
