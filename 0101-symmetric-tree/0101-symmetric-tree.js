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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root == null || (root.left == null && root.right == null)) return true
    let queue = [root]

    while (queue.length > 0) {
        left_arr = []
        right_arr = []
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let first = queue.shift()
            if (first.left != null) {
                left_arr.push(first.left ? first.left.val : null)
                queue.push(first.left)
            }
            if (first.right != null) {
                right_arr.push(first.right ? first.right.val : null)
                queue.push(first.right)
            }
            if (first.right == null && first.left == null) {
                right_arr.push(null)
                left_arr.push(null)
            }
        }
        left_arr = left_arr.reverse().join(",")
        if (left_arr == right_arr.join(',')) {
            left_arr = ''
            right_arr = ''
        }
        else {
            return false
        }
    }
    return true
};