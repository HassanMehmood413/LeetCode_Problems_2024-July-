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
   


    let arr = []
    var again = function (root, arr, level) {
        if (!root) return []
        if (arr.length == level) arr.push([])
        arr[level].push(root.val)

        again(root.left,arr,level+1)
        again(root.right,arr,level+1)
    }
    again(root,arr,0)
    return arr
};


