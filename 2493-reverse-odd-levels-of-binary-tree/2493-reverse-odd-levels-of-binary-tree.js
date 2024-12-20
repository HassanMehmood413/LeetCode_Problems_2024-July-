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
    let odd_count = 0
    while (queue.length > 0) {
        let collect = []
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let first = queue.shift()
            collect.push(first)
            if (first.left) {
                queue.push(first.left)
            }
            if (first.right) {
                queue.push(first.right)
            }
        }
        if (odd_count % 2 !== 0) {
            let left = 0
            let right = collect.length - 1
            while (left < right) {
                let temp = collect[left].val
                collect[left].val = collect[right].val
                collect[right].val = temp
                left++
                right--
            }
        }
        odd_count++
    }
    return root
};  