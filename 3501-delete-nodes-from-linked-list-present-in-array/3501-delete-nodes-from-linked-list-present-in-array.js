/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let current = head
    let dummy = new ListNode()
    let prev = dummy
    let set = new Set(nums)
    while(current != null){
        if(!set.has(current.val)){
            prev.next = current
            prev = prev.next
        }
        current = current.next
    }
    prev.next = null
    return dummy.next
};