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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    let node = root
    let new_node = new TreeNode(val)
    if (!root) return new_node

    while (node != null) {
        if (new_node.val > node.val) {
            if (node.right == null) {
                node.right = new_node
            }
            else {
                node = node.right
            }
        }
        else if (new_node.val < node.val) {
            if (node.left == null) {
                node.left = new_node
            }
            else {
                node = node.left
            }
        }
        else {
            return root
        }
    }
    return root
};