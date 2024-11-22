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
    let max = 0
    let length = nums.length
    for (let [value, index] of map) {
        if (index > (length / 2)) {
            max = value
        }
    }
    return max
};