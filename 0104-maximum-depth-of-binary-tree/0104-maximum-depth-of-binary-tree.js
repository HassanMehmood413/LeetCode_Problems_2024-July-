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
var maxDepth = function (root) {
    // let queue = [root]
    // if (!root) return 0
    // if (root && !root.left && !root.right) return 1

    // let depth = 0

    // while (queue.length > 0) {
    //     let length = queue.length

    //     for (let i = 0; i < length; i++) {
    //         let first = queue.shift()
    //         if (first.left != null) {
    //             queue.push(first.left)
    //         }
    //         if (first.right != null) {
    //             queue.push(first.right)
    //         }
    //     }
    //     depth++
    // }
    // return depth


    // recursion technique 
    if (!root) return 0
    let left = maxDepth(root.left) + 1
    let right = maxDepth(root.right) + 1
    return Math.max(left, right)

};