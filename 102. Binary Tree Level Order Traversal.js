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
 * @return {number[][]}
 */
// Iterative
// var levelOrder = function(root) {
//     let resArray = [];
//     let levelQueue = [];
//     if(root) levelQueue.push([root]);
//     while(levelQueue.length){
//         const levelArray = levelQueue.shift();
//         let childNodeArray = [];
//         let levelResArray = []

//         while(levelArray.length) {
//             let node = levelArray.shift();
//             levelResArray.push(node.val);
//             if(node.left) childNodeArray.push(node.left);
//             if(node.right) childNodeArray.push(node.right);
//         }
//         resArray.push(levelResArray);
//         if(childNodeArray.length) levelQueue.push(childNodeArray);
//     }
//     return resArray;
// };

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = [];
    function distance(root, dist) {
        if (!root) return;
        if (!res[dist]) res[dist] = [];
        res[dist].push(root.val)
        distance(root.left, dist + 1);
        distance(root.right, dist + 1);
    }
    distance(root, 0);
    return res;
};