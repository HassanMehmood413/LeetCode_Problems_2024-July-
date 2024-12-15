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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    var again = function (root, sum) {
        if (!root) return false
        sum += root.val

        if (!root.left && !root.right) {
            if (targetSum == sum) {
                return true
            }
        }
        return again(root.left, sum) ||
            again(root.right, sum)
    }
    return again(root, 0)

};