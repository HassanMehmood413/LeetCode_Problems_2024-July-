/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    n = n.toString(2).padStart(32, '0');
    n = n.split('').reverse().join('')
    let b = parseInt(n, 2)
    return b
};