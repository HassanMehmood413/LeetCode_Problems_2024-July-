/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
    let string = 'abc'
    let list = []
    var backtrack = function (n, k, current) {
        if (current.length == n) {
            list.push(current)
            return
        }

        for (let i = 0; i < string.length; i++) {
            if (current.length == 0 || current[current.length - 1] != string[i]) {
                backtrack(n, k, current + string[i])
            }
        }
    }
    backtrack(n, k, '')
    list = list.sort((a, b) => a - b)
    if (list[k - 1] == undefined) return ''
    return list[k - 1]
};