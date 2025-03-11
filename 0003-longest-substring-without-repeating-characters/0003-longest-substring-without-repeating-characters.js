/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max_l = 0
    let str = ''
    let right = 0, left = 0
    while (right < s.length) {
        while (str.includes(s[right])) {
            str = str.slice(1)
            left++
        }
        if (!str.includes(s[right])) {
            str += s[right]
            max_l = Math.max(max_l, str.length)
        }

        right++
    }
    return max_l
};