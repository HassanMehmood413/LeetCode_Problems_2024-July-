/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
    let map = new Map()
    nums.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1)
        }
        else {
            map.set(element, 1)
        }
    });
    let arr = []
    for (const [values, keys] of map) {
        if (keys == 2) {
            arr.push(values)
        }
    }

    let xor = 0
    for (let i = 0; i < arr.length; i++) {
        xor = xor ^ arr[i]
    }
    return xor
};