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
    // var again = function (root, sum, arr) {
    //     if (!root) return
    //     arr.push(root.val)
    //     sum = sum + root.val
    //     if (root.left == null && root.right == null && sum == targetSum) {
    //         return true
    //     }
    //     else {
    //         if (again(root.left, sum, arr) ||
    //             again(root.right, sum, arr)) {
    //             return true
    //         }
    //     }
    //     arr.pop()
    // }
    // if (again(root, 0, [])) {
    //     return true
    // }
    // return false


    var again = function (root, targetSum, sum) {
        if (!root) return false
        sum += root.val
        if (!root.left && !root.right) {
            if (sum === targetSum) return true
        }

        return again(root.left, targetSum, sum) || again(root.right, targetSum, sum)
    }
    return again(root, targetSum, 0)



};