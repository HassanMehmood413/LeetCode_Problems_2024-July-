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
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    // let queue1 = [root1]
    // let queue2 = [root2]
    // while (queue1.length || queue2.length) {
    //     let length = queue2.shift()
    //     for (let i = 0; i < length; i++) {
    //         let first = queue1.shift()
    //         let second = queue2.shift()
    //         let root = new TreeNode(first.val + second.val)
    //         if (first.left && second.left) {
    //             queue1.push(first.left)
    //             queeu2.push(first.left)
    //         }
    //         if (first.right && second.right) {
    //             queue1.push(first.right)
    //             queue2.push(second.right)
    //         }

    //     }
    // }
    var again = function (root1, root2) {
        // if (!root1 && !root2) return true
        if (!root1 || !root2) return root1 || root2

        let root = new TreeNode(root1.val + root2.val)
        root.left = again(root1.left, root2.left)
        root.right = again(root1.right, root2.right)
        return root
    }
    return again(root1,root2)
};