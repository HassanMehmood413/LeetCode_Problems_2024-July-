/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let l1 = list1
    let l2 = list2

    let dummy = new ListNode()
    let tail = dummy

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1
            l1 = l1.next
        }
        else {
            tail.next = l2
            l2 = l2.next
        }
        tail = tail.next
    }
    if (l1) {
        while (l1) {
            tail.next = l1
            tail = tail.next
            l1 = l1.next
        }
    }
    else if (l2) {
        while (l2) {
            tail.next = l2
            tail = tail.next
            l2 = l2.next
        }
    }
    return dummy.next

};