/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (char == '*') {
            stack.pop()
        }
        else {
            stack.push(char)
        }
    }
    return stack.join("")
};