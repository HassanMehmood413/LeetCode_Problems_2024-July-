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
var checkTree = function (root) {
    // Using BFS

    // let queue = [root]
    // let val = root.val
    // sum = 0
    // while (queue.length > 0) {
    //     let length = queue.length
    //     for (let i = 0; i < length; i++) {
    //         let first = queue.shift()
    //         if(first.left != null){
    //             sum = sum + first.left.val
    //         }
    //         if(first.right != null){
    //             sum = sum + first.right.val
    //         }
    //     }
    // }
    // if(sum == val){
    //     return true
    // }
    // else{
    //     return false
    // }

    // Using Recursion
    if(!root)return 0
    return root.val === root.left.val + root.right.val
};