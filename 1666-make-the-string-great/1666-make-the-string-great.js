/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (stack.length > 0 && (stack[stack.length - 1] == char.toLowerCase()) || (stack[stack.length-1] == char.toUpperCase())) {
            if (char == stack[stack.length - 1]) {
                stack.push(char)
            }
            else {
                stack.pop()
            }
        }
        else {
            stack.push(char)
        }
    }
    return stack.join('')
};