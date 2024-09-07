/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode()
    let prev = dummy
    let carry = 0
    while (l1 || l2 || carry) {
        v1 = l1 ? l1.val : 0
        v2 = l2 ? l2.val : 0
        sum = v1 + v2 + carry
        carry = Math.floor(sum / 10)
        sum = sum % 10
        prev.next = new ListNode(sum)
        prev = prev.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    return dummy.next
};