/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let map = new Map()
    arr.forEach((value) => {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
        }
        else {
            map.set(value, 1)
        }
    })
    array = Array.from(map.values()).sort()
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] != array[i - 1]) {
            count++
        }
    }
    if (count == array.length) {
        return true
    }
    else {
        return false
    }
};