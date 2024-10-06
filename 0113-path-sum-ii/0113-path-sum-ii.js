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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let overall = []
    var dfs = function (root, sum, arr) {
        if (!root) return
        arr.push(root.val)
        sum = sum + root.val
        // console.log(arr)
        if (root.left == null && root.right == null && sum == targetSum) {
            overall.push([...arr])
            console.log(overall)
        }
        else {
            dfs(root.left, sum, arr)
            dfs(root.right, sum, arr)
        }
        arr.pop()
        sum = sum - [sum[sum.length - 1]]

    }
    dfs(root, 0, [])
    return overall
};