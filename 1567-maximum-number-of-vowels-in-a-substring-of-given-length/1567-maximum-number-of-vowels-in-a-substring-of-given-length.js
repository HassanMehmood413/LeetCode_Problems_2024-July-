/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    s = s.split('')
    let vowels = 'aeiou'
    let str = []
    let count = 0
    for (let i = 0; i < k; i++) {
        str.push(s[i])
        if (vowels.includes(s[i])) {
            count++
        }
    }
    let max = count
    for (let i = k; i < s.length; i++) {
        str.push(s[i])
        let a = str.shift()
        if (vowels.includes(a)) {
            count--
        }
        if (vowels.includes(s[i])) {
            count++
        }
        max = Math.max(count, max)

    }
    return max
};