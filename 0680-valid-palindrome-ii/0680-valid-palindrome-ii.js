/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let first = 0;
    let end = s.length - 1
    while (first < end) {
        if (s[first] != s[end]) {
            return check(s, first + 1, end) || check(s, first, end - 1)
        }
        first++
        end--
    }
    return true
}
var check = function (s, left, right) {
    while (left < right) {
        if (s[left] != s[right]) return false
        left++
        right--
    }
    return true
}