/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
    let map = new Map()
    let arr = []
    let count = 1
    for (let i = lowLimit; i <= highLimit; i++) {
        let sum = 0
        let number = i
        while (number > 0) {
            sum += number % 10
            number = Math.floor(number / 10)
        }

        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1)
        }
        else {
            map.set(sum, 1)
        }
    }
    let max = -Infinity
    for (const [key, value] of map) {
        if (value > max) {
            max = value
        }
    }
    return max
};