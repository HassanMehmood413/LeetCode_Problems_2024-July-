/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
    // Using BFS
    // if (!root) return 0
    // let queue = [root]
    // let arr = []
    // let level = 0
    // arr.push(level)
    // while (queue.length > 0) {
    //     let length = queue.length
    //     for (let i = 0; i < length; i++) {
    //         let first = queue.shift()
    //         for (let j of first.children) {
    //             queue.push(j)
    //         }
    //     }
    //     level++
    // }
    // return level
    let max = 0
    var again = function (root, level) {
        if (!root) return 0
        max = Math.max(level, max)
        for (let i of root.children) {
            again(i, level + 1)
        }

    }
    again(root, 1)
    return max

};