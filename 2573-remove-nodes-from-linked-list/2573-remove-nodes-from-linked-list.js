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
var removeNodes = function (head) {
    let prev = null
    let current = head
    while(current != null){
        let temp = current.next
        current.next = prev
        prev = current
        current = temp
    }
    let current2 = prev
    let dummy = new ListNode()
    let prev2 = dummy
    while(current2 != null){
        if(current2.val >= prev2.val){
            prev2.next = current2
            prev2 = current2
            current2 = current2.next
        }
        else{
            current2 = current2.next
        }
    }
    prev2.next = null
    let prev3 = null
    let current3 = dummy.next
    while(current3 != null){
        let temp = current3.next
        current3.next = prev3
        prev3 = current3
        current3 = temp
    }
    return prev3
};