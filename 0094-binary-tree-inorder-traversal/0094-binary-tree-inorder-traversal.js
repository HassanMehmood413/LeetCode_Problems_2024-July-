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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    // using DFS
    // let stack = []
    // let inorder = []
    // while (root != null || stack.length != 0) {
    //     if (root) {
    //         stack.push(root)
    //         root = root.left
    //     }
    //     else {
    //         root = stack.pop()
    //         inorder.push(root.val)
    //         root = root.right
    //     }
    // }
    // return inorder
    let res = []
    var again = function (root) {
        if (root) {
            again(root.left)
            res.push(root.val)
            again(root.right)
        }
    }
    again(root)
    return res


};