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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    let queue1 = [root]
    let queue2 = [subRoot]
    let isvalid = false
    while (queue1.length > 0) {
        let length = queue1.length
        for (let i = 0; i < length; i++) {
            let first = queue1.shift()
            if (first.val != subRoot.val) {

                if (first.left) {
                    queue1.push(first.left)
                }
                if (first.right) {
                    queue1.push(first.right)
                }
            }
            else if (first.val == subRoot.val) {
                let ans = check(first, subRoot)
                if (ans) {
                    return isvalid = true
                }
                if (first.left) queue1.push(first.left);
                if (first.right) queue1.push(first.right);
            }
        }
    }
    return isvalid
};

var check = function (node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    if (node1.val !== node2.val) return false;

    return check(node1.left, node2.left) && check(node1.right, node2.right);
};