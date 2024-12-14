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
var maxDepth = function (root) {

    var again = function (root) {
        if (!root) return 0

        let left = again(root.left)
        let right = again(root.right)
        return Math.max(left, right) + 1
    }
    return again(root)
};