/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    arr = [0, 1, 1]
    if (n < 3) {
        return arr[n]
    }
    for (let i = 3; i <= n; i++) {
        let sum = arr.reduce((acc, dcc) => acc + dcc, 0)
        arr = [arr[1], arr[2], sum]
    }
    return arr[2]
};