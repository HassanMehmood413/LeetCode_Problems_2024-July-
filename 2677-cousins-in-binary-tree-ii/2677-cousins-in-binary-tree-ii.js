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
 * @return {TreeNode}
 */
var replaceValueInTree = function (root) {
    let res = []
    let queue2 = [root]
    while (queue2.length > 0) {
        let length = queue2.length
        let sum = 0
        for (let i = 0; i < length; i++) {
            let first = queue2.shift()
            sum = sum + first.val
            if (first.left != null) {
                queue2.push(first.left)
            }
            if (first.right != null) {
                queue2.push(first.right)
            }
        }
        res.push(sum)

    }


    let queue = [root]
    root.val = 0
    let level = 0
    while (queue.length > 0) {
        let length = queue.length
        let nextLevelSum = level + 1 < res.length ? res[level + 1] : 0;
        for (let i = 0; i < length; i++) {
            let sum = 0
            let first = queue.shift()
            if (first.left != null) {
                sum = sum + first.left.val
            }
            if (first.right != null) {
                sum = sum + first.right.val
            }
            if (first.left != null) {
                queue.push(first.left)
                first.left.val = nextLevelSum - sum

            }
            if (first.right != null) {
                queue.push(first.right)
                first.right.val = nextLevelSum - sum
            }
        }
        level++
    }

    return root
};