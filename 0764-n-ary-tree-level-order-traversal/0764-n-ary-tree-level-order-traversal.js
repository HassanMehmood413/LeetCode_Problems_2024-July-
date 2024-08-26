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
    // Recomended solution is BFS
    // Using BFS
    // if (!root) return []
    // let queue = [root]
    // let result = []
    // while (queue.length > 0) {
    //     let length = queue.length
    //     arr = []
    //     for (let i = 0; i < length; i++) {
    //         let first = queue.shift()
    //         arr.push(first.val)
    //         for (let j of first.children) {
    //             queue.push(j)
    //         }
    //     }
    //     result.push(arr)
    // }
    // return result

    let result = []
    var again = function (root, level) {
        if (!root) return []
        if (result.length == level) {
            result.push([]) // This is for new block of array
        }
        result[level].push(root.val)
        for (let j of root.children) {
            again(j, level + 1)
        }
    }
    again(root, 0)
    return result
};