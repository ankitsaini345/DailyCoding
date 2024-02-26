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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let answer, num = 0;

    function inOrder(root) {
        if(!root) return;
        if(answer) return;
        inOrder(root.left);
        num++;
        if(num === k ) answer = root.val;
        inOrder(root.right);
    }
    inOrder(root);
    return answer;
};