/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    let map = new Map()
    arr.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1)
        }
        else {
            map.set(element, 1)
        }
    });
    count = 0
    for (const [key, value] of map) {
        if (value == 1) {
            count++
            if (count == k) {
                return key
            }
        }
    }
    return ''
};