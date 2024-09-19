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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    // first make SameTree function
    // then make isSubtree to check if subroot is a subroot of tree 
    if(!subRoot && root) return true
    if(!root && subRoot) return false
    if(sametree(root,subRoot)) return true
    return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot)

};
// same tree is for if the length of both are same
var sametree = function (root, subRoot) {
    if (!root && !subRoot) return true
    if (root && subRoot && root.val == subRoot.val) {
        return sametree(root.left, subRoot.left) && sametree(root.right, subRoot.right)
    }
    return false
}