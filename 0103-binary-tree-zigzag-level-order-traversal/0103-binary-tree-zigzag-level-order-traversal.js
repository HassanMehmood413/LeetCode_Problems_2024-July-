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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return []

    let queue = [root]
    let result = []
    let reverse = 0
    while (queue.length > 0) {
        let collect = []
        let length = queue.length
        for (let i = 0; i < length; i++) {

            let first = queue.shift()
            collect.push(first.val)

            if (first.left != null) {
                queue.push(first.left)
            }
            if (first.right != null) {
                queue.push(first.right)
            }
        }

        if (reverse == 0) {
            result.push([...collect])
            reverse = 1
        }
        else {
            collect = collect.reverse()
            result.push([...collect])
            reverse = 0
        }
    }
    return result
};