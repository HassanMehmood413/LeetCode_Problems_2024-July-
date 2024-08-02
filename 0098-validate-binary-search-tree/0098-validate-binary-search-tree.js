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
var isValidBST = function (root) {
    function valid(root, low, right) {
        if (root == null) {
            return true
        }
        if (!(low < root.val && root.val < right)) {
            return false
        }
        return valid(root.left, low, root.val) && valid(root.right, root.val, right)
    }
    return valid(root, -Infinity, Infinity)
};