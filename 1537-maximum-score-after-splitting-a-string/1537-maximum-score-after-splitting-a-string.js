/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    // My Solution:

    // let left_zeros = s[0]
    // let right_ones = ''
    // let left_counts = 0
    // let right_counts = 0

    // if (s[0] == '0') left_counts++

    // let high = 0

    // for (let i = 1; i < s.length; i++) {
    //     if (s[i] == '1') {
    //         right_counts++
    //     }
    //     right_ones = right_ones + s[i]
    // }
    // right_ones = right_ones.split('')

    // while (right_ones.length > 0) {
    //     let score = left_counts + right_counts
    //     high = Math.max(high, score)

    //     let a = right_ones.shift()

    //     if (a == '0') {
    //         left_counts++
    //     }
    //     else {
    //         right_counts--
    //     }
    //     left_zeros = left_zeros + a
    // }
    // return high

    let ones = 0, zeros = 0, high = 0
    for (let el of s) {
        if (el == '1') ones++
    }
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == '1') {
            zeros--
        }
        else {
            ones++
        }
        let score = zeros + ones
        high = Math.max(score, high)
    }
    return high

};