/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let count = 0
    let str = ''
    let max = -Infinity
    for (let right = 0; right < s.length; right++) {
        while (str.includes(s[right])) {
            str = str.slice(1)
        }
        str = str + s[right]
        max = Math.max(max, str.length)
    }
    return max == -Infinity ? 0 : max
};