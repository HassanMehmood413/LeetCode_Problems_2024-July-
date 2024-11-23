/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let str = ''
    let count = 0
    let max = -Infinity
    for (let right = 0; right < s.length; right++) {
        while (str.includes(s[right])) {
            str = str.slice(1)
        }
        max = Math.max(str.length, max)
        str = str + s[right]
    }
    return max == -Infinity ? 0 : max + 1
};