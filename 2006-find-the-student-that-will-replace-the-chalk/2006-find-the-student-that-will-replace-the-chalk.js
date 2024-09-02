/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
    let left = 0, res = 0, sum = 0
    sum = chalk.reduce((acc, num) => acc + BigInt(num), BigInt(0));
    k = BigInt(k) % sum
    while (k >= 0) {
        if (left > chalk.length - 1) {
            left = 0
        }
        k = k - BigInt(chalk[left])
        if (k < 0) {
            res = left
        }
        left++
    }
    return res
};