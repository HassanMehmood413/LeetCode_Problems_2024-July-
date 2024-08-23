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
    let result = function (nums) {
        if(!nums.length) return null
        let mid = Math.floor(nums.length / 2)
        let v = nums[mid]
        let node = new TreeNode(v)
        node.left = result(nums.slice(0,mid))
        node.right = result(nums.slice(mid+1))
        return node
    }
    return result(nums)
};
