/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    s = s.split('')
    stack = []
    for (let i = 0; i <= s.length - 1; i++) {
        if (s[i] != '*') {
            stack.push(s[i])
        }
        else if (s[i] == '*') {
            stack.pop()
        }
    }
    return stack.join('')
};