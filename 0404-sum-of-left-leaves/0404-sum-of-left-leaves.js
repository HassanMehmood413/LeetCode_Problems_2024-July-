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
var sumOfLeftLeaves = function (root) {
    if (root == null) return 0

    let queue = [[root, false]]
    let arr = []

    while (queue.length > 0) {

        let length = queue.length

        for (let i = 0; i < length; i++) {
            let [first, isleft] = queue.shift()

            if (isleft && !first.right && !first.left) {
                arr.push(first.val)
            }

            if (first.left != null) {
                queue.push([first.left, true])
            }

            if (first.right != null) {
                queue.push([first.right, false])
            }
        }
    }
    let p = arr.reduce((acc, dcc) => acc + dcc , 0)
    return p

};