/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    return x == x.toString().split('').reverse().join('')

};