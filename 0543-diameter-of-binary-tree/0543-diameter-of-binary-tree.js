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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    this.diameter = 0;  // Initialize the diameter variable

    // Use an arrow function to maintain the correct 'this' context
    const again = (root) => {
        if (!root) return 0;  // If the node is null, return 0

        // Recursively calculate the left and right subtree heights
        let lh = again(root.left);
        let rh = again(root.right);

        // Update the diameter with the sum of left and right heights
        this.diameter = Math.max(lh + rh, this.diameter);

        // Return the height of the current node
        return Math.max(lh, rh) + 1;
    };

    again(root);  // Start the recursion from the root
    return this.diameter;
}