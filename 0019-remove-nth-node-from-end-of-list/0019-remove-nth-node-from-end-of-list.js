/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let curr = head
    let prev = null
    while (curr != null) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }


    let curr1 = prev
    let dummy = new ListNode()
    let prev1 = dummy
    let length = 0
    while (curr1 != null) {
        if (length != n - 1) {
            prev1.next = new ListNode(curr1.val)
            prev1 = prev1.next
        }
        length++
        curr1 = curr1.next
    }

    let curr2 = dummy.next
    let prev2 = null
    while (curr2 != null) {
        let temp = curr2.next
        curr2.next = prev2
        prev2 = curr2
        curr2 = temp
    }
    return prev2

};