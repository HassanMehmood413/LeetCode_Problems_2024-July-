/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let queue = [root]
    let result = []
    while (queue.length > 0) {
        let length = queue.length
        arr = []
        for (let i = 0; i < length; i++) {
            let first = queue.shift()
            arr.push(first.val)
            for (let j of first.children) {
                queue.push(j)
            }
        }
        result.push(arr)
    }
    return result
};