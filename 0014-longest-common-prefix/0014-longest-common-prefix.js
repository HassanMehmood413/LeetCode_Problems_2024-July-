/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = strs[0]
    for (let i = 0; i < strs.length; i++) {
        let temp = ""
        for (let j = 0; j < Math.min(prefix.length, strs[i].length); j++) {
            if (prefix[j] == strs[i][j]) {
                temp += strs[i][j]
            }
            else {
                break
            }
        }
        prefix = temp
    }
    if (prefix.length == "") {
        return ""
    }
    return prefix
};

