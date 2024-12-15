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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) return null
    if (root.val > key) {
        root.left = deleteNode(root.left, key)
    }
    else if (root.val < key) {
        root.right = deleteNode(root.right, key)
    }
    else {
        if (!root.left && !root.right) {
            return null
        }
        if (!root.left) {
            return root.right
        }
        else if (!root.right) {
            return root.left
        }

        let value = find(root.right)
        root.val = value.val

        root.right = deleteNode(root.right, value.val)

    }
    return root

};
var find = function (root) {
    while (root.left != null) {
        root = root.left
    }
    return root
}
