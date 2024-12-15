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
 * @return {string}
 */
var tree2str = function (root) {
    // let str = ''
    // var again = function (root) {
    //     if (!root) return ''
    //     str = `${root.val}`
    //     if (root.left || root.right) {
    //         str = str + `(${again(root.left)})`
    //     }
    //     if (root.right) {
    //         str = str + `(${again(root.right)})`
    //     }
    //     return str
    // }
    // let res = again(root)
    // return res


    var again = function (root, res) {

        if (!root) return
        res.push(root.val)
        if (root.left) {
            res.push('(')
            again(root.left, res)
            res.push(')')
        }
        if (!root.left && root.right) {
            res.push('()')
        }
        if (root.right) {
            res.push('(')
            again(root.right, res)
            res.push(")")
        }
        return res
    }
    let s = again(root, [])
    return s.join('')


};
