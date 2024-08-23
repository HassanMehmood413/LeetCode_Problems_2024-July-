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
var preorderTraversal = function (root) {
    // Using Recursion

    // let arr = []
    // let again = function (root) {
    //     if (root == null) return []
    //     arr.push(root.val)
    //     again(root.left)
    //     again(root.right)
    //     return arr
    // }
    // return again(root)

    // Using DFS
    // let stack = [root]
    // if (!root) return []
    // let arr = []
    // while (stack.length > 0) {
    //     let length = stack.length
    //     for (let i = 0; i < length; i++) {
    //         let first = stack.pop()
    //         arr.push(first.val)
    //         if (first.right != null) {
    //             stack.push(first.right)
    //         }
    //         if (first.left != null) {
    //             stack.push(first.left)
    //         }
    //     }
    // }
    // return arr

    // Using BFS
    let queue = [root]
    if (!root) return []
    let arr = []
    while (queue.length > 0) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let first = queue.pop()
            arr.push(first.val)
            if (first.right != null) {
                queue.push(first.right)
            }
            if (first.left != null) {
                queue.push(first.left)
            }
        }
    }
    return arr
};