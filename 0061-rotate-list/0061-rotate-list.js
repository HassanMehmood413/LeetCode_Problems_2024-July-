/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next || k == 0) return head
    let curr = head
    let length = 1
    while (curr.next != null) {
        curr = curr.next
        length++
    }
    curr.next = head

    k = k % length
    k = length - k

    while (k > 0) {
        curr = curr.next
        k--
    }
    head = curr.next
    curr.next = null
    return head
};