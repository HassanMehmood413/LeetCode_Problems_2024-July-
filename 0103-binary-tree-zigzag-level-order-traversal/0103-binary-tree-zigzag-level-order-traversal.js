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
    let arr = []
    let comb = []
    let count = 0
    while (queue.length > 0) {
        let length = queue.length
        comb = []
        for (let i = 0; i < length; i++) {
            let first = queue.shift()
            comb.push(first.val)
            if (first.left != null) {
                queue.push(first.left)
            }
            if (first.right != null) {
                queue.push(first.right)
            }
        }
        if (count == 0) {
            arr.push(comb)
            count = 1
        }
        else if (count == 1) {
            comb = comb.reverse()
            arr.push(comb)
            count = 0
        }
    }
    return arr
};