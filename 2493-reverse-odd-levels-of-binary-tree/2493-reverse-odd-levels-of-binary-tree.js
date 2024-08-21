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
var reverseOddLevels = function (root) {
    if (!root) return []
    let queue = [root]
    let count = 0
    while (queue.length > 0) {
        let comb = []
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let first = queue.shift()
            comb.push(first)
            if (first.left != null) {
                queue.push(first.left)

            }
            if (first.right != null) {
                queue.push(first.right)
            }
        }
        if (count % 2 != 0) {
            let left = 0
            let right = comb.length - 1
            while (left < right) {
                let temp = comb[left].val
                comb[left].val = comb[right].val
                comb[right].val = temp
                left++
                right--
            }
        }
        count++

    }
    return root
};