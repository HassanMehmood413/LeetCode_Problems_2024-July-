/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let count = 0
    while (low <= high) {
        if (low.toString().length % 2 == 0) {
            let len = low.toString().length
            let firsthalf = low.toString().slice(0, len / 2)
            let secondhalf = low.toString().slice(len / 2, len)
            firsthalf = firsthalf.split('')
            secondhalf = secondhalf.split('')
            let first_sum = firsthalf.reduce((a, b) => Number(a) + Number(b), 0)
            let second_sum = secondhalf.reduce((a, b) => Number(a) + Number(b), 0)
            if(first_sum == second_sum){
                count++
            }
        }
        low++
    }
    return count
};