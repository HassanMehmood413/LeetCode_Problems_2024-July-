/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    let arr = []
    let arr2 = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            arr.push(nums[i])
        }

    }
    let map = new Map()
    arr.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1)
        }
        else {
            map.set(element, 1)
        }
    });
    array = Array.from(map.values())
    let max = Math.max(...array)
    for (let [value, key] of map) {
        if (key == max) {
            arr2.push(value)
        }
    }
    if (arr2.length > 0) {
        return Math.min(...arr2)
    }
    else {
        return -1
    }

};