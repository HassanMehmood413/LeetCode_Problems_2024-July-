/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    //Finding Middle
    let slow = head
    let fast = head.next
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    // Reverse the second half
    let second = slow.next
    let prev = slow.next = null
    while (second != null) {
        let temp = second.next
        second.next = prev
        prev = second
        second = temp
    }
    //merging both
    let first = head
    let second2 = prev
    while (second2 != null) {
        let t1 = first.next
        let t2 = second2.next
        first.next = second2
        second2.next = t1
        first = t1
        second2 = t2
    }

};