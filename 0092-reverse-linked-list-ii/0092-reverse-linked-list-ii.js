/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let arr = []
    let current = head
    let dummy = new ListNode()
    let prev = dummy
    while (current != null) {
        arr.push(current.val)
        current = current.next
    }
    const before = arr.slice(0, left - 1);
    const portion = arr.slice(left - 1, right - 1 + 1);
    const after = arr.slice(right - 1 + 1);

    const reversedPortion = portion.reverse();
    arr = before.concat(reversedPortion, after)
    for (let i = 0; i <= arr.length - 1; i++) {
        prev.next = new ListNode(arr[i])
        prev = prev.next
    }
    return dummy.next
};