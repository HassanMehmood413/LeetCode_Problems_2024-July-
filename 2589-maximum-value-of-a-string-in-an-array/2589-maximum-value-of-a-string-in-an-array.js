/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
    let max = -Infinity
    for (let i = 0; i < strs.length; i++) {
        if (isNaN(Number(strs[i]))) {
            length = strs[i].length
            if (length > max) {
                max = length
            }
        }
        else {
            length = Number(strs[i])
            if (length > max) {
                max = length
            }
        }
    }
    return max
};