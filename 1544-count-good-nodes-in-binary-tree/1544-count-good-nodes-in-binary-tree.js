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
var goodNodes = function (root) {
    let stack = [{ node: root, max: root.val }]
    let count = 0
    let max = root.val
    while (stack.length > 0) {
        // let length = stack.length
        // for (let i = 0; i < length; i++) {
            let { node, max } = stack.pop()
            if (node.val >= max) {
                max = node.val
                count++
            }
            if (node.left != null) {
                stack.push({ node: node.left, max: node.val })
            }
            if (node.right != null) {
                stack.push({ node: node.right, max: node.val })
            }
        // }
    }
    return count
};