/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// For all trees
var lowestCommonAncestor = function (root, p, q) {
  let ans;
  p = p.val;
  q = q.val;
  function lcs(root, p, q) {
    if (ans) return;
    if (!root) return null;

    let left = lcs(root.left, p, q);
    let right = lcs(root.right, p, q);

    if(root.val === p) {
        if(left === q || right ===q) {
            ans = root;
            return;
        }
        return root.val;
    }
    if(root.val === q) {
        if(left === p || right ===p) {
            ans = root;
            return;
        }
        return root.val;
    }

    if (!left && !right) return null;
    if ((left === p && right === q) || (left === q && right === p)) {
      ans = root;
      return;
    }
    if (left === p || left === q) return left;
    if (right === p || right === q) return right;
    return null;
  }
  lcs(root, p, q);
  return ans;
};


//for BST
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null

    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q)
    } else {
        return root
    }
};