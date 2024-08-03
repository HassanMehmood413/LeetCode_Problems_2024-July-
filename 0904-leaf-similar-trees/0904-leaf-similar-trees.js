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
    // Helper function to perform DFS and collect leaf nodes
    function dfs(root, leafList) {
        if (root === null) {
            return;
        }

        // Check if it is a leaf node
        if (root.left === null && root.right === null) {
            leafList.push(root.val);
        }

        // Recursive DFS traversal
        dfs(root.left, leafList);
        dfs(root.right, leafList);
    }

    const leaf1 = [];
    const leaf2 = [];

    dfs(root1, leaf1);
    dfs(root2, leaf2);
    return leaf1.join('_') == leaf2.join('_')
};