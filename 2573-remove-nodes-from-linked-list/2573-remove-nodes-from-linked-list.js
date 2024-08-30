/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
    let prev = null
    let cur = head
    while (cur != null) {
        temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }
    let current = prev
    let dummy = new ListNode()
    let dum = dummy
    while (current != null) {
        if (current.val >= dum.val) {
            dum.next = current
            dum = current
            current = current.next
        }
        else {
            current = current.next
        }
    }
    dum.next = null


    let again = null
    let ag = dummy.next
    while (ag != null) {
        temp = ag.next
        ag.next = again
        again = ag
        ag = temp
    }
    return again
};