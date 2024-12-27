/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
    let arr = []
    let max = 0
    for (let i = 0; i < values.length - 1; i++) {
        let j = i + 1
        while (j < values.length) {
            let a = values[i] + values[j] + i - j
            max = Math.max(a, max)
            j++
        }
        if (i + 1 >= values.length - 1) {
            arr.push(max)
        }
    }
    return arr[0]
};