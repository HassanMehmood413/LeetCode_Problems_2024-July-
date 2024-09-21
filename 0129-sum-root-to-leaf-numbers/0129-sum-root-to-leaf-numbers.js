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
var sumNumbers = function (root) {
    let sum = 0
    let max = 0
    var again = function (root, sum) {
        if (!root) return 0
        sum = sum * 10 + root.val
        if (root.left == null && root.right == null) {
            max = max + sum
            return
        }
        again(root.left, sum)
        again(root.right, sum)
    }
    again(root, 0)
    return max
};