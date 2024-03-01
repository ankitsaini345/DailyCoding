/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const arr = [];
    const dfs = (root) => {
        if(!root) {
            arr.push('*');
            return null;
        }
        arr.push(root.val)
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return arr.join('.');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const arr = data.split('.');
    let i = 0;
    const buildDfs = () => {
        const item = arr[i++];
        if(item === '*') return null;
        const root = new TreeNode(item);
        root.left = buildDfs()
        root.right = buildDfs()
        return root;
    }
    return buildDfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */