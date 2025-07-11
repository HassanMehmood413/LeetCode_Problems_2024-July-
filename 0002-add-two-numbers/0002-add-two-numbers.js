/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0
    let dummy = new ListNode()
    let temp = dummy

    while (l1 || l2 || carry) {
        list1 = l1? l1.val : 0
        list2 = l2? l2.val : 0
        sum = list1 + list2 + carry
        carry = Math.floor(sum / 10)
        sum = sum % 10
        temp.next = new ListNode(sum)
        temp = temp.next
        l1 = l1? l1.next : null
        l2 = l2? l2.next : null
    }
    return dummy.next
};