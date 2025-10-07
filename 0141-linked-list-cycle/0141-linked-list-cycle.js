/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let left = head
    let right = head
    while (right && right.next) {
        left = left.next
        right = right.next.next
        if (left == right) {
            return true
        }
    }
    return false
};
