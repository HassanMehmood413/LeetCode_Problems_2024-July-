/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0
    let arr = new Set()
    let max = 0
    let right = 0
    while (right < s.length) {
        while((arr.has(s[right]))) {
            arr.delete(s[left])
            left++
        }
        arr.add(s[right])
        max = Math.max(max, right - left + 1)
        right++
    }
    return max
};