/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    var dfs = function (root, leaflist) {
        if (!root) return
        if (!root.left && !root.right) {
            leaflist.push(root.val)
        }
        if (root.left) {
            dfs(root.left, leaflist)
        }
        dfs(root.right, leaflist)
    }

    let leaf1 = []
    let leaf2 = []

    dfs(root1, leaf1)
    dfs(root2, leaf2)
    return leaf1.join(",") == leaf2.join(",")

};
