/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
    s = s.split("")
    max = 0
    count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'E') {
            count++
            if (count > max) {
                max = count
            }
        }
        else {
            count--
        }
    }
    return max
};