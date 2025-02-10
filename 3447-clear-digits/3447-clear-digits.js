/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i]) && s[i] !== ' ') { 
            let j = i - 1
            while (j >= 0) {
                if (isNaN(s[j])) {
                    s.splice(i, 1)
                    s.splice(j, 1)
                    i -= 2
                    break
                }
                j--
            }
        }

    }
    return s.join('')
};