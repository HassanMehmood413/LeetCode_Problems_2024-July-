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
    let curr = root
    let node = new TreeNode(val)
    if(!root) return node
    while (curr != null) {
        if (val < curr.val) {
            if (curr.left == null) {
                curr.left = node
            }
            else {
                curr = curr.left
            }
        }
        else if (val > curr.val) {
            if (curr.right == null) {
                curr.right = node
            }
            else {
                curr = curr.right
            }
        }
        else{
            return root
        }
    }
    return root
};