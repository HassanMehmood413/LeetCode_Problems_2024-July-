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
var searchBST = function(root, val) {
    if(root == null){
        return null
    }
    if(val == root.val){
        return root
    }
    else if(val >= root.val){
       return searchBST(root.right,val)
    }
    else{
        return searchBST(root.left,val)
    }
   
};