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
var sortedArrayToBST = function (nums) {
    var again = function (nums) {
        if (!nums.length) return null
        let mid = Math.floor(nums.length / 2)
        let node = nums[mid]
        let root = new TreeNode(node)
        root.left = again(nums.slice(0, mid))
        root.right = again(nums.slice(mid + 1))
        return root
    }
    return again(nums)
};