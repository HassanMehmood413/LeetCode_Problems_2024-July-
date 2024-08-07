/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    // let str = ''
    // let str2 = ''
    // let current = head
    // let dummy = new ListNode()
    // let prev = dummy
    // while (current != null) {
    //     if (current.val < x) {
    //         str = str + current.val
    //     }
    //     else {
    //         str2 = str2 + current.val
    //     }
    //     current = current.next
    // }
    // let total = str + str2
    // total = total.split('')
    // for (let i = 0; i <= total.length - 1;i++){
    //     prev.next = new ListNode(Number(total[i]))
    //     prev = prev.next
    // }
    // return dummy.next


    let small = new ListNode()
    let greater = new ListNode()
    let small_n = small
    let greater_n = greater
    let current = head
    while(current!=null){
        if(current.val < x){
            small_n.next = current
            small_n = small_n.next
        }
        else{
            greater_n.next = current
            greater_n = greater_n.next
        }
        current = current.next
    }
    greater_n.next = null
    small_n.next = greater.next
    return small.next
}