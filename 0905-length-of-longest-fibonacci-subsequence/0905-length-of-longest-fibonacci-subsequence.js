/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
    let count = 0
    let set = new Set(arr)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let a = arr[i], b = arr[j], length = 2
            while (set.has(a + b)) {
                let temp = a + b
                a = b
                b = temp
                length++
            }
            count = Math.max(count, length)
        }
    }
    return count > 2 ? count : 0
};