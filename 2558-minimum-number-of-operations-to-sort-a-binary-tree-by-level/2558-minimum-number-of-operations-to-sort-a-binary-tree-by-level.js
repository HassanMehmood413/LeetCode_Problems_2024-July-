/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minimumOperations = function (root) {
    let queue = [root]
    let count = 0
    while (queue.length > 0) {
        let arr = []
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let first = queue.shift()
            arr.push(first.val)

            if (first.left) queue.push(first.left)
            if (first.right) queue.push(first.right)
        }
        let val = check_sort(arr)
        count += val
    }
    return count
};
var check_sort = function (arr) {
    let copy = [...arr].sort((a, b) => a - b)
    let visit = new Array(arr.length).fill(false)
    let swap_count = 0
    for (let i = 0; i < arr.length; i++) {
        if (visit[i] || copy[i] == arr[i]) continue

        let cyclesize = 0
        let j = i
        while (!visit[j]) {
            visit[j] = true
            j = copy.indexOf(arr[j])
            cyclesize++
        }
        if (cyclesize > 1) {
            swap_count += (cyclesize - 1)
        }
    }
    return swap_count

}