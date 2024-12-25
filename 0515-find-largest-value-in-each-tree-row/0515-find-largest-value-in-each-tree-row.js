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
var largestValues = function (root) {
    if (!root) return []
    let queue = [root]
    let result = [root.val]
    while (queue.length > 0) {
        let arr = []
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let first = queue.shift()
            if (first.left) {
                queue.push(first.left)
                arr.push(first.left.val)
            }
            if (first.right) {
                queue.push(first.right)
                arr.push(first.right.val)
            }
        }
        let max = Math.max(...arr)
        if (max != Infinity && max != -Infinity) {
            result.push(max)
        }
    }
    return result
};