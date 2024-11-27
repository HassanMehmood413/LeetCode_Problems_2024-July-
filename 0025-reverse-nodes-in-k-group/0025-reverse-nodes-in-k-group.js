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
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let temp = head
    let prevlast = null
    while (temp != null) {
        let kthNode = getkthNode(temp, k)
        if (kthNode == null) {
            if (prevlast) {
                prevlast.next = temp
            }
            break
        }

        let nextNode = kthNode.next
        kthNode.next = null

        reverselist(temp)

        if (temp == head) {
            head = kthNode
        }
        else {
            prevlast.next = kthNode
        }
        prevlast = temp
        temp = nextNode
    }
    return head

}
function getkthNode(temp, k) {
    k = k - 1
    while (temp !== null && k > 0) {
        temp = temp.next
        k--
    }
    return temp
}
function reverselist(temp) {
    let curr = temp
    let prev = null
    while (curr != null) {
        let t = curr.next
        curr.next = prev
        prev = curr
        curr = t
    }
    return prev
}