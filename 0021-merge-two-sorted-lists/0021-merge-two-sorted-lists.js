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
    l1 = list1
    l2 = list2
    let dummy = new ListNode()
    let tail = dummy
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            tail.next = l1
            tail = tail.next
            l1 = l1.next
        }
        else {
            tail.next = l2
            tail = tail.next
            l2 = l2.next
        }
    }
    while (l1 != null) {
        tail.next = l1
        tail = tail.next
        l1 = l1.next
    }
    while(l2 != null){
        tail.next = l2
        l2 = l2.next
        tail = tail.next
    }
    return dummy.next
};