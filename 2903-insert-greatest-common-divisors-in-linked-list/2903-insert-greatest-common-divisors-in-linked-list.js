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
var insertGreatestCommonDivisors = function (head) {
    let dummy = new ListNode()
    let prev = dummy
    let slow = head
    let fast = slow.next
    while (fast != null) {
        let a = slow.val
        let b = fast.val
        while (b != 0) {
            [a, b] = [b, a % b]
        }
        prev.next = new ListNode(slow.val)
        prev = prev.next
        prev.next = new ListNode(a)
        prev = prev.next
        slow = slow.next
        fast = fast.next
    }
    prev.next = new ListNode(slow.val)
    return dummy.next
};