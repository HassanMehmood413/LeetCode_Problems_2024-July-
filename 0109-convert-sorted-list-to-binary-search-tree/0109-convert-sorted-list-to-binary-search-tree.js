/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    let root = head
    let arr = []
    while (root) {
        arr.push(root.val)
        root = root.next
    }

    var result = function (arr) {
        if (!arr.length) return null
        let mid = Math.floor(arr.length / 2)
        let v = arr[mid]
        let node = new TreeNode(v)
        node.left = result(arr.slice(0, mid))
        node.right = result(arr.slice(mid + 1))
        return node
    }
    return result(arr)
};