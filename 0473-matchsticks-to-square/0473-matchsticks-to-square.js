/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
    let sum = matchsticks.reduce((a, v) => a + v)
    if (sum % 4 !== 0) return false
    let target = sum / 4

    let array = new Array(4).fill(0)
    matchsticks = matchsticks.sort((a, b) => b - a)
    var again = function (start) {
        if (start == matchsticks.length) {
            return true
        }

        for (let i = 0; i < 4; i++) {
            if (matchsticks[start] + array[i] <= target) {
                array[i] = matchsticks[start] + array[i]
                if (again(start + 1)) return true
                array[i] = array[i] - matchsticks[start]
            }
        }
        return false
    }
    return again(0)

};