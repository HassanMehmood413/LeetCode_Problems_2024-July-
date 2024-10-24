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
var flipEquiv = function (root1, root2) {
    // if (!root1 && !root2) return true
    // if (root1 == null || root2 == null) return false
    // if (root1.val != root2.val) return false
    // let queue1 = [root1]
    // let queue2 = [root2]
    // while (queue1.length > 0 && queue2.length > 0) {
    //     let length1 = queue1.length
    //     let length2 = queue2.length
    //     if (queue1.length != queue2.length) return false
    //     let first = queue1.shift()
    //     let second = queue2.shift()
    //     if (first.left && second.left && first.left.val !== second.left.val) {
    //         // Swap the left and right children of both trees
    //         [first.left, second.left] = [second.right, first.right];
    //     }
    //     if (first.left != null) queue1.push(first.left)
    //     if (second.left != null) queue2.push(second.left)
    //     if (first.right != null) queue1.push(first.right)
    //     if (second.right != null) queue2.push(second.right)

    // }
    // return queue1.length == 0 && queue2.length == 0

    var again = function (root1, root2) {
        if (!root1 && !root2) return true
        if (!root1 || !root2) return false
        if (root1.val !== root2.val) return false

        return ((again(root1.left , root2.left) || again(root1.left , root2.right)) && (again(root1.right,root2.right) || again(root1.right,root2.left)))
    }
    return again(root1, root2)

};