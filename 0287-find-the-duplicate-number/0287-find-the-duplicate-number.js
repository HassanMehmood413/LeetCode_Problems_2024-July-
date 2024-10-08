/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let map = new Map()
    nums.forEach((value) => {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
        }
        else {
            map.set(value, 1)
        }
    })
    for (let [key, value] of map) {
        if (value > 1) {
            return key
        }
    }

};