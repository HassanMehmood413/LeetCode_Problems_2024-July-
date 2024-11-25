/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA && !headB) return null
    l2 = headB
    l1 = headA
    while (l1 != l2) {
        l1 = l1 ? l1.next : headB
        l2 = l2 ? l2.next : headA
    }
    return l1
};