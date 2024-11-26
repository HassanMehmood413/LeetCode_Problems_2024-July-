/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (!head || !head.next) return null
    let curr = head
    let slow = head
    let fast = head
    while (fast && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) {
            let cur = head
            while(cur != slow){
                slow = slow.next
                cur = cur.next
            }
            return cur
        }
        curr = curr.next
    }
    return null
};