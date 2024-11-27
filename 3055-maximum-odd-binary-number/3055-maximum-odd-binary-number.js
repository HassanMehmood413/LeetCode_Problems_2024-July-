/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
    let str = ''
    let ones = 0
    let zeros = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '1') {
            ones++
        }
        else {
            zeros++
        }
    }
    for (let i = 0; i < ones - 1; i++) {
        str = str + '1'
    }
    for(let j = 0;j<zeros;j++){
        str = str + '0'
    }
    str = str + '1'
    return str
};