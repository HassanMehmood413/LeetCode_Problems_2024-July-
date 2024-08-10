/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let current = head
    let nums = []
    let dummy = new ListNode()
    let prev = dummy
    while(current!=null){
        nums.push(current.val)
        current = current.next
    }
    let max = -Infinity
    let a = []
    for (let i = 0; i < nums.length / 2; i++) {
        a.push(nums[i], nums[nums.length - 1 - i])
        let mul = nums[i] + nums[nums.length - 1 - i]
        if (mul > max) {
            max = mul
        }
    }
    return max
}