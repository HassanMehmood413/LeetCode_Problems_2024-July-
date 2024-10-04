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
    let arr = []
    let temp = []
    let dummy = new ListNode()
    let prev = dummy
    let current = head

    // Traverse the linked list and store values in the array
    while (current != null) {
        arr.push(current.val)
        current = current.next
    }

    // Function to create new nodes from the temp array
    var list = function (temp, prev) {
        temp = temp.reverse()
        for (let i = 0; i < temp.length; i++) {
            prev.next = new ListNode(temp[i])
            prev = prev.next
        }
        return prev
    }

    // Iterate over the array in chunks of k
    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i])

        if (temp.length == k) {
            prev = list(temp, prev)  // Update `prev` to point to the last node in the list
            temp = []  // Reset the temp array for the next chunk
        }
    }
    var leftover = function (temp, prev) {
        for (let i = 0; i < temp.length; i++){
            prev.next = new ListNode(temp[i])
            prev = prev.next
        }
        return prev
    }

    // If there are leftover elements in temp, process them
    if (temp.length > 0) {
        prev = leftover(temp, prev)
    }

    return dummy.next



};