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
var deepestLeavesSum = function (root) {
    let queue = [root]
    let sum = 0
    let count = 0
    let again = 0
    while (queue.length > 0) {
        sum = 0
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let first = queue.shift()
            sum = sum + first.val
            if (first.left != null) {
                queue.push(first.left)
            }
            if (first.right != null) {
                queue.push(first.right)
            }

        }
    }
    return sum
};