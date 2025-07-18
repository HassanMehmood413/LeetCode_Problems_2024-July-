/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let pre = strs[0]
    let set = new Set()
    for (let i = 0; i < strs.length; i++) {
        let j = 0
        while (j < Math.min(pre.length, strs[i].length)) {
            if (pre[j] != strs[i][j]) break
            j += 1
        }
        pre = pre.slice(0, j)
    }
    return pre
};