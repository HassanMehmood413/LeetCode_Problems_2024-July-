/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let last = {}
    for (let i = 0; i <= s.length - 1; i++) {
        last[s[i]] = i
    }
    let max = 0
    let result = []
    let start = 0
    for (let i = 0; i <= s.length - 1; i++) {
        max = Math.max(max, last[s[i]])
        if (i == max) {
            result.push(i - start + 1)
            start = i+1
        }
    }
    return result
};