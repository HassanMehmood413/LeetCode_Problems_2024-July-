/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = []
    var ncr = function (n, row) {
        // if (row > n) return 0;
        // if (row === 0 || row === n) return 1;
        let res = 1
        for (let i = 0; i < row; i++) {
            res = res * (n - i)
            res = res / (i + 1)
        }
        return Math.round(res)
    }
    for (let i = 1; i <= numRows; i++) {
        let temp = []
        for (let j = 1; j <= i; j++) {
            temp.push(ncr(i - 1, j - 1))
        }
        res.push(temp)
    }
    return res
};