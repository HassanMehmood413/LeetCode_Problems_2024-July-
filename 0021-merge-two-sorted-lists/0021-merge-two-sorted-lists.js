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
    let prev = dummy
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            prev.next = new ListNode(l1.val)
            prev = prev.next
            l1 = l1.next
        }
        else {
            prev.next = new ListNode(l2.val)
            prev = prev.next
            l2 = l2.next
        }
    }
    while (l1 != null) {
        prev.next = new ListNode(l1.val)
        l1 = l1.next
        prev = prev.next
    }
    while(l2 != null){
        prev.next = new ListNode(l2.val)
        l2 = l2.next
        prev = prev.next
    }
    return dummy.next
};