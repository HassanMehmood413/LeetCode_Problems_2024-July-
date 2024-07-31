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
var countNodes = function (root) {
    //Using Stacks && DFS Iterative Approach
    // if (root == 0) {
    //     return 0
    // }
    // let count = 0
    // let stack = [root]
    // while (stack.length > 0) {
    //     let node = stack.pop()
    //     if (node === null) {
    //         continue; 
    //     }
    //     count++
    //     if (node.right) {
    //         stack.push(node.right)
    //     }
    //     if (node.left) {
    //         stack.push(node.left)
    //     }
    // }
    // return count

    //Using DFS Recursive Approach
    let count  = 0
    if(root == null){
        return 0
    }
    return count + 1 + countNodes(root.left) + countNodes(root.right)
};