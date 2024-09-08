/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    let arr = []
    let curr = head
    let length = 0
    let tm = []
    while (curr != null) {
        tm.push(curr.val)
        curr = curr.next
        length++
    }
    if (length < k) {
        for (let i = 0; i < tm.length; i++) {
            arr.push(list([tm[i]]))
        }
        for (let i = arr.length; i < k; i++) {
            arr.push(null)
        }

    }
    else {
        let index = 0
        avg_size = Math.floor(length / k)
        extra = length % k
        let i = 0
        for (let i = 0; i < k; i++) {
            let put = avg_size + (extra > 0 ? 1 : 0)
            arr.push(list(tm.slice(index, put + index)))
            index += put
            extra -= 1
        }
    }

    return arr

};
var list = function (arr) {
    if(arr.length == 0) return null
    let dummy = new ListNode()
    let prev = dummy

    for (let i = 0; i < arr.length; i++) {
        prev.next = new ListNode(arr[i])
        prev = prev.next
    }
    return dummy.next
}
