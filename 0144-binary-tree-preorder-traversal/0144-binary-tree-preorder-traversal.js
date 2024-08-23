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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let arr = []
    let again = function (root) {
        if (root == null) return []
        arr.push(root.val)
        again(root.left)
        again(root.right)
        return arr
    }
    return again(root)
};