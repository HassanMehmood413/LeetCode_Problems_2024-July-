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
var searchBST = function (root, val) {
    // if(root == null){
    //     return null
    // }
    // if(val == root.val){
    //     return root
    // }
    // else if(val >= root.val){
    //    return searchBST(root.right,val)
    // }
    // else{
    //     return searchBST(root.left,val)
    // }

    if (root == null) {
        return 0
    }
    let queue = [root]
    let value = val
    while (queue.length > 0) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let first = queue.shift()
            if(first.val == value){
                return first
            }
            if(first.left!=null){
                queue.push(first.left)
            }
            if(first.right!=null){
                queue.push(first.right)
            }
        }
    }
    return null
};