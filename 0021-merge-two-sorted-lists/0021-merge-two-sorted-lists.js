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
    let temp = dummy
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            temp.next = l1
            l1 = l1.next
        }
        else {
            temp.next = l2
            l2 = l2.next
        }
        temp = temp.next
    }
    if (l1 != null) {
        temp.next = l1
        l1 = l1.next
    }
    else if(l2 != null){
        temp.next = l2
        l2 = l2.next
    }
    return dummy.next

};