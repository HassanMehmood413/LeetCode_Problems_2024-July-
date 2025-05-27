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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    let sum = 0
    var again = function (root) {
        if (!root) return 0
        if (root.val <= high && root.val >= low) {
            sum += root.val
        }
        again(root.left)
        again(root.right)
    }
    again(root)
    return sum
};