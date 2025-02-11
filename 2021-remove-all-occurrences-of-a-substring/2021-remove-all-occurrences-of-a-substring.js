/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    let stack = []
    let l = part.length
    let ind = 0
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i])
        if (stack.length >= part.length) {
            let check = stack.slice(-l)
            if (check.join('') == part) {
                let counter = l
                while (counter > 0) {
                    stack.pop()
                    counter--
                }
            }
        }
    }
    return stack.join('')
};