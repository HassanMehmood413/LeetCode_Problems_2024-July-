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
var mergeNodes = function (head) {
    let dummy = new ListNode()
    let temp = dummy
    let slow = head
    let fast = head.next
    let sum = 0
    while (slow.next != null && fast != null) {
        if (slow.val == 0 && fast.val == 0) {
            temp.next = new ListNode(sum)
            temp = temp.next
            slow = fast
            sum = 0
        }
        sum += fast.val
        fast = fast.next
    }
    return dummy.next

};