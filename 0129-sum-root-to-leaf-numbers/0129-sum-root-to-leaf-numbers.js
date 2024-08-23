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
    let stack = [[root, 0]]
    let arr = ''
    let sum = 0
    while (stack.length > 0) {
        let length = stack.length
        for (let i = 0; i < length; i++) {
            let [first, currentnum] = stack.pop()
            currentnum = currentnum * 10 + first.val
            if (first.left == null && first.right == null) {
                sum = sum + currentnum

            }
            if (first.left != null) {
                stack.push([first.left, currentnum])
            }
            if (first.right != null) {
                stack.push([first.right, currentnum])
            }
        }
    }
    return sum
};