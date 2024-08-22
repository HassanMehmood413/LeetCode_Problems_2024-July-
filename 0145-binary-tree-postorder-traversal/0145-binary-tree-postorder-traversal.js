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
var postorderTraversal = function (root) {
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

    if (!root) return []
    let stack1 = [root]
    let stack2 = []
    let list = []
    while (stack1.length > 0) {
        root = stack1.pop()
        stack2.push(root.val)
        if (root.left != null) {
            stack1.push(root.left)
        }
        if (root.right != null) {
            stack1.push(root.right)
        }
    }
    while (stack2.length != 0) {
        num = stack2.pop()
        list.push(num)
    }
    return list



}
