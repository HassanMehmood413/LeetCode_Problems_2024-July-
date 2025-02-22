/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

var nextLargerNodes = function (head) {
    let answer = []
    let stack = []
    let count = 0
    let current = head
    while (current != null) {
        answer.push(0)
        while (stack.length && current.val > stack[stack.length - 1][1]) {
            let [ct, value] = stack.pop()
            answer[ct] = current.val
        }
        stack.push([count, current.val])
        count++
        current = current.next
    }
    return answer
}
// var nextLargerNodes = function (head) {
//     let current = head
//     let next_node = current.next
//     let arr = []
//     while (current != null && next_node != null) {
//         if (next_node.val > current.val) {
//             arr.push(next_node.val)
//         }
//         else {
//             let val = again(next_node, current.val)
//             arr.push(val)
//         }
//         current = current.next
//         next_node = current.next
//     }
//     arr.push(0)
//     return arr
// };
// var again = function (head, val) {
//     let current_full = head
//     while (current_full != null) {
//         if (current_full.val > val) {
//             return current_full.val
//         }
//         current_full = current_full.next
//     }
//     return 0
// }