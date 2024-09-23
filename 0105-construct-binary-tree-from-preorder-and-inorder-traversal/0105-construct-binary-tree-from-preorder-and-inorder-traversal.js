/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length == 0 || inorder.length == 0) return null
    let first = preorder[0]
    let root = new TreeNode(first)
    let index = inorder.indexOf(first)

    let left = inorder.slice(0, index)
    let right = inorder.slice(index + 1)

    preorder.shift()

    let leftP = preorder.slice(0, left.length)
    let rightP = preorder.slice(left.length)

    root.left = buildTree(leftP,left)
    root.right = buildTree(rightP,right)
    return root
};