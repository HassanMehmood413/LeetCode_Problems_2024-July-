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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    var again = function (root) {
        if (!root) return 0

        let temp = root.left
        root.left = root.right
        root.right = temp

        again(root.left)
        again(root.right)
    }
    again(root)
    return root
};