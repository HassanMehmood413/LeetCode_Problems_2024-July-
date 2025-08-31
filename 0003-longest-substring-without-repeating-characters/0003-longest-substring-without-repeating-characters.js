/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0
    let arr = []
    let max = 0
    let right = 0
    while (right < s.length) {
        while((arr.includes(s[right])) && (arr.length > 0)) {
            arr.shift()
            left++
        }
        console.log(arr)
        arr.push(s[right])
        max = Math.max(max, arr.length)
        right++
    }
    return max
};