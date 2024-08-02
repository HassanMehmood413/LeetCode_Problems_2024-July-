/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    s = s.split('')
    let l = 0
    let longest = 0
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            l = Math.max(l, map.get(s[i]) + 1)
        }

        map.set(s[i], i)
        longest = Math.max(longest, i - l + 1)

    }
    return longest
};