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
 * @return {number[]}
 */

var rightSideView = function(root) {
    let resArray = [];
    let levelQueue = [];
    if(root) levelQueue.push([root]);
    while(levelQueue.length){
        const levelArray = levelQueue.shift();
        let childNodeArray = [];
        let levelResArray = []

        while(levelArray.length) {
            let node = levelArray.shift();
            levelResArray.push(node.val);
            if(node.left) childNodeArray.push(node.left);
            if(node.right) childNodeArray.push(node.right);
        }
        resArray.push(levelResArray[levelResArray.length -1]);
        if(childNodeArray.length) levelQueue.push(childNodeArray);
    }
    return resArray;
};