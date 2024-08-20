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
var findBottomLeftValue = function (root) {
    if (!root) return 0
    if (root.left == null && root.right == null) return root.val
    let queue = [root]
    let left = 0
    while (queue.length > 0) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let first = queue.shift()
            if (first.right != null) {
                queue.push(first.right)
                left = first.right.val
            }
            if (first.left != null) {
                queue.push(first.left)
                left = first.left.val
            }
            if (first.left != null && first.right != null) {
                left = first.left.val
            }
        }
    }
    return left
};