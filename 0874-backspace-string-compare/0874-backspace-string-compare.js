/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    s = s.split('')
    t = t.split('')
    let stack1 = []
    let stack2 = []
    let i = 0
    while (i <= s.length - 1) {
        if (s[i] == "#" && stack1.length > 0) {
            stack1.pop()
        }
        else if(s[i] != '#'){
            stack1.push(s[i])
        }
        i++
    }
    i = 0
    while (i <= t.length - 1) {
        if (t[i] == "#" && stack2.length > 0) {
            stack2.pop()
        }
        else if(t[i] != '#') {
            stack2.push(t[i])
        }
        i++
    }
    return stack1.join('') == stack2.join("")
};