/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map()
    nums.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1)
        }
        else {
            map.set(element, 1)
        }
    });
    a = Array.from(map.entries()).sort((a, b) => b[1] - a[1])
    let i = 1
    let arr = []
    for (const [index, key] of a) {
        if (i <= k) {
            if (key >= 1) {
                arr.push(index)
            }
            i++
        }
    }
    return arr
};