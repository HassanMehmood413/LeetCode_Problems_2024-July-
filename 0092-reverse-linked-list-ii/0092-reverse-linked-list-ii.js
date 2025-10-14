/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} left   // 1-based position
 * @param {number} right  // 1-based position
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (!head || !head.next || left === right) return head;

    let dummy = new ListNode(0, head);
    let prev = dummy;

    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    let rightNode = prev.next;
    for (let i = left; i < right; i++) {
        rightNode = rightNode.next;
    }

    let after = rightNode.next;
    rightNode.next = null;
    let segmentHead = prev.next;

    let reversed = reverse_list(segmentHead);

    prev.next = reversed;
    segmentHead.next = after;

    return dummy.next;
};

var reverse_list = function (lists) {
    let curr = lists;
    let prev = null;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};
