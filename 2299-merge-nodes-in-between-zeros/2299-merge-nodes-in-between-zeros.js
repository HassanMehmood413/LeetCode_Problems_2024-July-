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
var mergeNodes = function (head) {
    // let arr = []
    // let current = head
    // let dummy = new ListNode()
    // let prev = dummy
    // while (current != null) {
    //     arr.push(current.val)
    //     current = current.next
    // }
    // let sum1 = 0
    // let arr2 = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] != 0) {
    //         sum1 = sum1 + arr[i]
    //     }
    //     else if (sum1 != 0) {
    //         arr2.push(sum1)
    //         sum1 = 0
    //     }
    // }
    // for (let i = 0; i < arr2.length; i++) {
    //     prev.next = new ListNode(arr2[i])
    //     prev = prev.next
    // }
    // return dummy.next

    let current = head
    let dummy = new ListNode()
    let prev = dummy
    let sum = 0
    while (current != null) {

        if (current.val != 0) {

            while (current.val != 0) {
                sum = sum + current.val
                current = current.next
            }
            prev.next = new ListNode(sum)
            prev = prev.next
            sum = 0
        }

        current = current.next

    }
    return dummy.next
};