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
    let isvalid = true
    var again = function (root) {
        if (!root) return true

        let left = again(root.left) 
        let right = again(root.right)
        if (Math.abs(right - left) > 1) {
            isvalid = false
        }
        return Math.max(left, right) + 1;
    }
    again(root)
    return isvalid
};