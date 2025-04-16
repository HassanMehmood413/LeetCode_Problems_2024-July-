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
var deleteDuplicates = function (head) {
    // let slow = head
    // let check = head.next
    // let dummy = new ListNode()
    // let temp = dummy
    // while (check) {
    //     if (slow.val !== check.val) {
    //         temp.next = slow
    //         temp = temp.next
    //         slow = check
    //     }
    //     check = check.next

    // }
    // temp.next = slow
    // temp = temp.next
    // temp.next = null
    // return dummy.next


    let curr = head
    while (curr && curr.next) {
        if (curr.val == curr.next.val) {
            curr.next = curr.next.next
        }
        else {
            curr = curr.next
        }
    }
    return head
};