var addSpaces = function (s, spaces) {
    let ans = ''
    let j = 0
    let element = 0
    for (let i = 0; i < s.length; i++) {
        if (i == spaces[j]) {
            ans = ans + ' '
            j++
        }
        ans = ans + s[i]
    }
    return ans
};