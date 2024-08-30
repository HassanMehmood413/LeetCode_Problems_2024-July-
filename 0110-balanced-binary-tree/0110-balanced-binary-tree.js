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
var isBalanced = function (root) {
    let is = true
    const again = (root) => {
        if (!root) return true
        let left = again(root.left)
        let right = again(root.right)
        if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
            return is = false
        }
        return Math.max(left, right) + 1

    }
    again(root)
    return is

};