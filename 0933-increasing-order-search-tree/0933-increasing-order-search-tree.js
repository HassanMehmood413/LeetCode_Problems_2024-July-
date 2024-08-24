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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    let arr = []
    let queue = [root]
    while (queue.length > 0) {
        let length = queue.length
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
    }
    arr.sort((a, b) => a - b)
    let new_root = new TreeNode(arr[0])
    let current = new_root
    for (let i = 1; i < arr.length; i++) {
        current.right = new TreeNode(arr[i])
        current = current.right
    }
    return new_root


};