/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    let dummy = new ListNode()
    dummy.next = list1
    let prev = dummy
    for (let i = 0; i < a; i++) {
        prev = prev.next
    }
    let after = prev
    for (let i = a; i <= b; i++) {
        after = after.next
    }
    prev.next = list2

    let tail = list2
    while (tail.next != null) {
        tail = tail.next
    }
    tail.next = after.next
    return dummy.next
};