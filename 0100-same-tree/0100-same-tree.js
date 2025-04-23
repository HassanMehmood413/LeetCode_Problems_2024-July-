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
    let queue1 = [p]
    let queue2 = [q]
    while (queue1.length && queue2.length) {
        let length = queue1.length
        for (let i = 0; i < length; i++) {
            let first = queue1.shift()
            let second = queue2.shift()
            if(!first && !second) continue
            if(!first || !second) return false
            if(first.val !== second.val) return false
            queue1.push(first.left)
            queue2.push(second.left)
            queue1.push(first.right)
            queue2.push(second.right)
        }
    }
    return true

};