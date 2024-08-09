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
var maxLevelSum = function (root) {
    let queue = [root]
    let max = -Infinity
    let level = 1
    let currentlevel = 1
    while (queue.length > 0) {
        let length = queue.length
        let currentsum = 0

        for (let i = 0; i < length; i++) {
            let first = queue.shift()
            currentsum = first.val + currentsum

            if (first.left != null) {
                queue.push(first.left)
            }
            if (first.right != null) {
                queue.push(first.right)
            }
        }
        if (currentsum > max) {
            max = currentsum
            level = currentlevel
        }
        currentlevel++
    }

    return level

};