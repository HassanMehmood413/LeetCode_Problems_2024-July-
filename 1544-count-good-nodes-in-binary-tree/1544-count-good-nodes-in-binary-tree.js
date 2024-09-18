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
var goodNodes = function (root) {
    if(root.val == null) return 0
    let queue = [{ node: root, max: root.val }]
    let count = 0
    let max = root.val
    while (queue.length > 0) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let { node, max } = queue.shift()
            if (node.val >= max) {
                count++
            }
            newmax = Math.max(node.val,max)
            if (node.left != null) {
                queue.push({ node: node.left, max: newmax })
            }
            if (node.right != null) {
                queue.push({ node: node.right, max: newmax })
            }
        }
    }
    return count
};