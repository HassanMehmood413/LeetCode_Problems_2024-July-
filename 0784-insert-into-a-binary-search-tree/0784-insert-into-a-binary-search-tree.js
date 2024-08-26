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
    // let queue = [root]
    // if(!root) return new TreeNode(val)
    // while (queue.length > 0) {
    //     let length = queue.length
    //     for (let i = 0; i < length; i++){
    //         let first = queue.shift()
    //         if(val < first.val){
    //             if(first.left == null){
    //                 first.left = new TreeNode(val)
    //                 break
    //             }
    //             else{
    //                 queue.push(first.left)
    //             }
    //         }
    //         else{
    //             if(first.right == null){
    //                 first.right = new TreeNode(val)
    //                 break
    //             }
    //             else{
    //                 queue.push(first.right)
    //             }
    //         }
    //     }
    // }
    // return root

    let stack = [root]
    if(!root) return new TreeNode(val)
    while (stack.length > 0) {
        let length = stack.length
        for (let i = 0; i < length; i++){
            let first = stack.pop()
            if(val < first.val){
                if(first.left == null){
                    first.left = new TreeNode(val)
                    break
                }
                else{
                    stack.push(first.left)
                }
            }
            else{
                if(first.right == null){
                    first.right = new TreeNode(val)
                    break
                }
                else{
                    stack.push(first.right)
                }
            }
        }
    }
    return root
};