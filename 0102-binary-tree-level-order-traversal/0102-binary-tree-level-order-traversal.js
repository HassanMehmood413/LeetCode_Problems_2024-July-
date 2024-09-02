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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // if (!root) return []
    // let queue = [root]
    // let arr = []
    // let comb = []
    // while (queue.length > 0) {
    //     let length = queue.length
    //     comb = []
    //     for (let i = 0; i < length; i++) {
    //         let first = queue.shift()
    //         comb.push(first.val)
    //         if (first.left != null) {
    //             queue.push(first.left)
    //         }
    //         if (first.right != null) {
    //             queue.push(first.right)
    //         }
    //     }
    //     arr.push(comb)
    // }
    // return arr


    // Using recursion
    let arr = []
    var again = function (root, arr, level) {
        if (!root) return []
        if(arr.length == level) arr.push([])
        arr[level].push(root.val)


        again(root.left, arr, level + 1)
        again(root.right, arr, level + 1)

    }
    again(root, arr, 0)
    return arr
};