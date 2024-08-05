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
var insertGreatestCommonDivisors = function (head) {
    let numbers = []
    let current = head
    let dummy = new ListNode()
    let prev = dummy
    while (current != null) {
        numbers.push(current.val)
        current = current.next
    }

    let result = [];

    for (let i = 0; i < numbers.length - 1; i++) {
        result.push(numbers[i]); 

        let a = numbers[i];
        let b = numbers[i + 1];
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        let gcdValue = a; 

        result.push(gcdValue); 
    }

    result.push(numbers[numbers.length - 1]);


    for (let i = 0; i <= result.length - 1;i++){
        prev.next = new ListNode(result[i])
        prev = prev.next
    }
    return dummy.next
};