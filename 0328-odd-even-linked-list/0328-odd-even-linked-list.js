/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    let current = head
    let dummy = new ListNode()
    let prev = dummy
    let arr = []
    while (current != null) {
        arr.push(current.val)
        current = current.next
    }
    const odds = arr.filter((_,index) => index % 2 !== 0);
    const evens = arr.filter((_,index) => index % 2 === 0);
    arr = evens.concat(odds)
    for (let i = 0; i <= arr.length - 1;i++){
        prev.next = new ListNode(arr[i])
        prev = prev.next
    }
    return dummy.next

};