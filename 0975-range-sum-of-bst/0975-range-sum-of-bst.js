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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    if(!root){
        return 0
    }
    let queue = [root]
    let sum = 0
    if(root.val >= low && root.val <=high){
        sum = sum + root.val
    }
    while (queue.length > 0) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let first = queue.shift()
            if (first.left != null) {
                queue.push(first.left)
            }
            if (first.right != null) {
                queue.push(first.right)
            }
            if (first.left != null) {
                if (first.left.val >= low && first.left.val <= high) {
                    sum = sum + first.left.val
                }
            }
            if (first.right != null) {

                if (first.right.val >= low && first.right.val <= high) {
                    sum = sum + first.right.val
                }
            }
        }
    }
    return sum

};