/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let arr = []
    let str = ''
    var again = function (open, close, n, arr, str) {
        if (open == n && close == n) {
            arr.push(str)
            return
        }
        if (open < n) {
            again(open + 1, close, n, arr, str + '(')
        }
        if (close < open) {
            again(open, close + 1, n, arr, str + ')')
        }
    }
    again(0, 0, n, arr, str)
    return arr
};