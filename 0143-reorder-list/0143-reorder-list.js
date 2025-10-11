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
    // 1,2,3,4,5
    //     s
    //         f
    // 1,2,5,4,3
    if (!head || !head.next) return;


    let slow = head, fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let prev = null
    let curr = slow.next
    slow.next = null
    while (curr) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    // 3) Merge two halves alternately
    let l1 = head, l2 = prev;
    while (l2) {
        const n1 = l1.next, n2 = l2.next;
        l1.next = l2;
        l2.next = n1;
        l1 = n1;
        l2 = n2;
    }
    return head
};

