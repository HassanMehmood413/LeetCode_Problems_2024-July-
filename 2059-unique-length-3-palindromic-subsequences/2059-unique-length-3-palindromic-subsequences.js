/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
    if (s.length < 3) return 0
    let result = new Set()
    let left = new Set()
    let right = new Map()
    for (let i = 0; i < s.length; i++) {
        if (right.has(s[i])) {
            right.set(s[i], right.get(s[i]) + 1)
        }
        else {
            right.set(s[i], 1)
        }
    }


    for (let mid = 0; mid < s.length; mid++) {
        let midChar = s[mid];

        right.set(midChar, right.get(midChar) - 1);
        if (right.get(midChar) === 0) {
            right.delete(midChar);
        }
        for (let char of left) {
            if (right.has(char)) {
                result.add(char + midChar + char);
            }
        }
        left.add(midChar);
    }
    return result.size
};