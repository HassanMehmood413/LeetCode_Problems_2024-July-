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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    let dummy = new TreeNode()
    let prev = dummy
    var again = function (root) {
        if (!root) return
        prev.right = root
        prev = prev.right
        // we just only need the right nodes in flatten BT 
        //So we go to the right node and make its left children null 
        let left = root.left
        let right = root.right
        root.left = null
        again(left)
        again(right)
    }
    again(root)
    return dummy.right

};