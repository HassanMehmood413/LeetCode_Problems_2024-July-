/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let arr = ''
    let a = ''
    let curr = head
    while (curr != null) {
        arr = arr + curr.val
        a = curr.val + a
        curr = curr.next
    }
    return arr == a

};