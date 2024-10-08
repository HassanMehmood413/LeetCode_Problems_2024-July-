/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    if(!head) return null
    let curr = head
    let map = new Map()
    while (curr != null) {
        let newnode = new Node(curr.val)
        map.set(curr, newnode)
        curr = curr.next
    }
    let current = head
    while (current != null) {
        let copy = map.get(current)
        copy.next = map.get(current.next) || null
        copy.random = map.get(current.random) || null
        current = current.next
    }
    return map.get(head)
};