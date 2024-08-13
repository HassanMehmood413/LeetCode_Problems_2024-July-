/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let count = 0
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
    let max = 0
    let array = Array.from(map.keys()).sort((a, b) => a - b)
    for (let i = 0; i < array.length; i++) {
        let a = array[i] - 1
        if (!map.has(a)) {
            for (let j = 0; j < array.length; j++) {
                a = a + 1
                if (map.has(a)) {
                    count++
                }
                else {
                    break
                }
            }
            if (count >= max) {
                max = count
                count = 0
            }
            else{
                count = 0
            }
        }
    }
    return max
};