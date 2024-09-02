/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    let max = Math.max(...nums)
    let node = new TreeNode(max)
    let index = nums.indexOf(max)

    left_nums = nums.slice(0, index)
    if (left_nums.length > 0)
        node.left = constructMaximumBinaryTree(left_nums)

    right_nums = nums.slice(index + 1)
    if (right_nums.length > 0)
        node.right = constructMaximumBinaryTree(right_nums)
    return node
}