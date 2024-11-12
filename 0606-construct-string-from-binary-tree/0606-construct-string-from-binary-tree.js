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
 * @return {string}
 */
var tree2str = function (root) {
    let str = ''
    var again = function (root) {
        if (!root) return ''
        str = `${root.val}`
        if (root.left || root.right) {
            str = str + `(${again(root.left)})`
        }
        if (root.right) {
            str = str + `(${again(root.right)})`
        }
        return str
    }
    let res = again(root)
    return res
};