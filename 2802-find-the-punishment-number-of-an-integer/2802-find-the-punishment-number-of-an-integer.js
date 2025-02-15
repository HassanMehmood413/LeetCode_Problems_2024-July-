/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
    let total = 0
    let integer = 1
    while (integer <= n) {
        let sq = integer * integer
        let sum_sq = sq.toString()
        // console.log(sum_sq)
        if (partition(sum_sq, integer, 0)) {
            total += sq
        }
        integer++
    }
    return total

};

var partition = function (numstr, integer, index) {
    if (index == numstr.length) return integer == 0
    let sum = 0
    for (let i = index; i < numstr.length; i++) {
        sum = sum * 10 + Number(numstr[i])
        if (sum > integer) break

        if (partition(numstr, integer - sum, i + 1)) {
            return true
        }
    }
    return false
}