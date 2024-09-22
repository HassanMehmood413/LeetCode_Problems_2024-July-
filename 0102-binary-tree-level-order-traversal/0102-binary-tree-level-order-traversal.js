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
var levelOrder = function (root) {
    if(!root) return []
    let queue = [root]
    let res = []
    while (queue.length > 0) {
        let length = queue.length
        let arr = []
        for (let i = 0; i < length; i++) {
            let first = queue.shift()
            arr.push(first.val)
            if (first.left != null) {
                queue.push(first.left)
            }
            if (first.right != null) {
                queue.push(first.right)
            }
        }
        res.push(arr)
    }
    return res
};