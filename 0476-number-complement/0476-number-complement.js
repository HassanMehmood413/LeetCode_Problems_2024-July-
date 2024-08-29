/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    a = num.toString(2)
    a = a.split("")
    for (let i = 0; i < a.length; i++) {
        if (a[i] == '1') {
            a[i] = '0'
        }
        else {
            a[i] = '1'
        }
    }
    a = a.join('')
    return parseInt(a, 2)
};