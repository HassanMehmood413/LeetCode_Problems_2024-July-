/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // Using Recursion
    // if (!p && !q) return true
    // if (p && q && p.val == q.val) {
    //     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    // }
    // return false

    if (!p && !q) return true
    if (!p || !q) return false
    let queue = [p]
    let queue2 = [q]
    while (queue.length > 0 && queue2.length > 0) {
        let first = queue.shift()
        let second = queue2.shift()
        if (!first && !second) continue
        if (!first || !second) return false
        if (first.val != second.val) return false
        queue.push(first.left)
        queue.push(first.right)
        queue2.push(second.left)
        queue2.push(second.right)
    } return queue.length == 0 && queue2.length == 0


};   