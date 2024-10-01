/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length == 0) return null
    var merge = function (l1, l2) {

        let dummy = new ListNode()
        let prev = dummy

        while (l1 != null && l2 != null) {
            if (l1.val < l2.val) {
                prev.next = l1
                l1 = l1.next
            }
            else {
                prev.next = l2
                l2 = l2.next
            }
            prev = prev.next
        }
        if (l1 != null) {
            prev.next = l1
        }
        else if (l2 != null) {
            prev.next = l2
        }
        return dummy.next
    }
    while (lists.length > 1) {
        let mergedLists = [];

        // Merge lists in pairs
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = i + 1 < lists.length ? lists[i + 1] : null;
            let a = mergedLists.push(merge(l1, l2));
        }

        lists = mergedLists; // Update the lists array to hold merged results
    }

    return lists[0];
};
