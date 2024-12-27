/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
    // TLE

    // let arr = []
    // let max = 0
    // for (let i = 0; i < values.length - 1; i++) {
    //     let j = i + 1
    //     while (j < values.length) {
    //         let a = values[i] + values[j] + i - j
    //         max = Math.max(a, max)
    //         j++
    //     }
    //     if (i + 1 >= values.length - 1) {
    //         arr.push(max)
    //     }
    // }
    // return arr[0]

    let max = -Infinity
    let maxl = values[0] + 0
    for (let j = 1; j < values.length; j++){
        let a = maxl + values[j] - j
        max = Math.max(max,a)
        maxl = Math.max(maxl,values[j]+j)
    }
    return max
};