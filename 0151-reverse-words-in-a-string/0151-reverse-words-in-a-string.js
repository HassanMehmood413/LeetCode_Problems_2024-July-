/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    b = s.split(' ').filter(word => word !== '');
    let array = []
    let length = b.length - 1
    for (let i = length; i >= 0; i--) {
        array.push(b[i])
    }
    array = array.toString().replaceAll(/[\s+,.]/g, ' ').trim()
    return array
};