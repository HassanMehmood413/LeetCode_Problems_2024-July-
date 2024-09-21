/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = new Map()
    nums.forEach((value) => {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
        }
        else {
            map.set(value, 1)
        }
    })
    let max = -Infinity
    let index = 0
    for (let [key, value] of map) {
        if (value > max) {
            max = value
            index = key
        }
    }
    return index
};