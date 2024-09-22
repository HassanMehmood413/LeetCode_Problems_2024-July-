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
var lowestCommonAncestor = function (root, p, q) {
    var again = function (root, p, q) {
        if (!root) return 0
        if (root == p || root == q) {
            return root
        }

        let left = again(root.left, p, q)
        let right = again(root.right, p, q)
        if (left && right) return root
        return left ? left : right
    }
    return again(root, p, q)

};