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
    if (!p && !q) {
        return true
    }
    if (!p || !q) {
        return false
    }
    let queue = [p]
    let arr = []
    while (queue.length > 0) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let first = queue.shift()
            arr.push(first ? first.val : null);
            if (first) {
                queue.push(first.left ? first.left : null);
                queue.push(first.right ? first.right : null);
            }
        }
    }

    let queue2 = [q]
    let arr2 = []
    while (queue2.length > 0) {
        let length = queue2.length
        for (let i = 0; i < length; i++) {
            let first = queue2.shift()
            arr2.push(first ? first.val : null);
            if (first) {
                queue2.push(first.left ? first.left : null);
                queue2.push(first.right ? first.right : null);
            }
        }
    }
    if (arr.length != arr2.length) {
        return false
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr2[i]) {
            return false; // Elements at index i are different
        }
    }

    return true;
}