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
var minDepth = function (root) {
    // USING BFS
    // let min = 1
    // if (!root) return []
    // let queue = [root]
    // while (queue.length > 0) {
    //     let length = queue.length
    //     for (let i = 0; i < length; i++) {
    //         let first = queue.shift()
    //         if (first.left == null && first.right == null) {
    //             return min
    //         }
    //         if (first.left != null) {
    //             queue.push(first.left ? first.left : null)
    //         }
    //         if (first.right != null) {
    //             queue.push(first.right ? first.right : null)
    //         }
    //     }
    //     min++
    // }

    // USING RECURSION
    // var again = function (root) {
        if (!root) {
            return 0
        }
        if (root.left == null) {
            return minDepth(root.right) + 1
        }
        if (root.right == null) {
            return minDepth(root.left) + 1
        }
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1
    // }
};