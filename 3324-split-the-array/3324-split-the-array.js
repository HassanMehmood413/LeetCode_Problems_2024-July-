/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {

    let map = new Map()
    nums.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1)
        }
        else {
            map.set(element, 1)
        }
    });
    let j = 0
    for (const [key, value] of map) {
        if (value > 2) {
            return false
        }
    }
    return true

}; 