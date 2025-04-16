/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let curr = head
    let dummy = new ListNode()
    let temp = dummy
    while (curr) {
        if (curr.val !== val) {
            temp.next = curr
            temp = temp.next
        }
        else {
            temp.next = null
        }
        curr = curr.next
    }
    return dummy.next
};