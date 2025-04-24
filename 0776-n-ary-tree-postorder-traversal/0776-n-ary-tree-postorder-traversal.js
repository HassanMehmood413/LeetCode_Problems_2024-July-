/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
    if (!root) return []
    let queue = [root]
    let arr = []
    while (queue.length) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let first = queue.pop()
            arr.unshift(first.val)
            for (let el of first.children) {
                queue.push(el)
            }
        }
    }
    return arr
};