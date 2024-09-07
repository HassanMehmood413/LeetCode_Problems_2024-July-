/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let left = 0
    let count = 0
    let str = ''
    let vowels = 'aeiou'
    let max = 0;
    for (let i = 0; i < k; i++) {
        str = str + s[i]
        if (vowels.includes(s[i])) {
            count++
        }
    }
    max = count
    for (let right = k; right <= s.length; right++) {
        str = str + s[right]
        if (vowels.includes(s[right])) {
            count++
        }
        if (str.length > k) {
            while (str.length > k) {
                if (vowels.includes(str[left])) {
                    count--
                }
                str = str.slice(1)
            }
        }
        max = Math.max(max, count)
    }
    return max
};