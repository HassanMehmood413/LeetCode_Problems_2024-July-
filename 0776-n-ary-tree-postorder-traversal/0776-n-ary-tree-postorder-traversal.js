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
    // Using DFS
    // if (!root) return []
    // let stack = [root]
    // let arr = []
    // let second = []
    // while (stack.length > 0) {
    //     let length = stack.length
    //     for (let i = 0; i < length; i++) {
    //         let first = stack.pop()
    //         arr.unshift(first.val)
    //         for (let j of first.children) {
    //             stack.push(j)
    //         }
    //     }
    // }
    // return arr
    // Using BFS
    if (!root) return []
    let queue = [root]
    let arr = []
    let second = []
    while (queue.length > 0) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let first = queue.pop()
            arr.unshift(first.val)
            for (let j of first.children) {
                queue.push(j)
            }
        }
    }
    return arr
};