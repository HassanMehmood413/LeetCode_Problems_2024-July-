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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let queue = [root]
    let arr = []
    arr.push(root.val)
    while (queue.length > 0) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let first = queue.shift()
            if (first.left != null) {
                queue.push(first.left)
                arr.push(first.left.val)
            }
            if (first.right != null) {
                queue.push(first.right)
                arr.push(first.right.val)
            }
        }
    }
    arr.sort((a,b)=>a-b)
    return arr[k - 1]

};