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
 * @return {number}
 */
var goodNodes = function (root) {
    // if (root === null) { return 0 }
    // let queue = [{ node: root, maxsofar: root.val }]
    // let count = 0
    // while (queue.length > 0) {
    //     let length = queue.length
    //     for (let i = 0; i < length; i++) {

    //         let { node, maxsofar } = queue.shift()

    //         if (node.val >= maxsofar) {
    //             count++
    //         }
    //         newmax = Math.max(maxsofar, node.val)
    //         if (node.left != null) {
    //             queue.push({ node: node.left, maxsofar: newmax })
    //         }
    //         if (node.right != null) {
    //             queue.push({ node: node.right, maxsofar: newmax })
    //         }
    //     }
    // }
    // return count

    // USING RECURSION
    // let count = 0
    // function dfs(node, max) {
    //     if (!node) {
    //         return 
    //     }
    //     if (node.val >= max) {
    //         count++
    //     }
    //     dfs(node.left, Math.max(max, node.val))
    //     dfs(node.right, Math.max(max, node.val))
    // }

    // dfs(root, root.val)
    // return count

    //Using DFS
    let stack = []
    stack.push([root, -Infinity])
    let count = 0
    let value = root.val
    while (stack.length > 0) {
        let [node, max] = stack.pop()
        const { left, right, val } = node
        if (max <= val) {
            count++
            max = val
        }
        if (left) {
            stack.push([left,max])
        }
        if (right) {
            stack.push([right,max])
        }
    }
    return count

}