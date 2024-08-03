/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let l = 0
    let str = ''
    let count = 1
    for (let i = 1; i <= chars.length; i++) {
        if (chars[l] == chars[i]) {
            count++
        }
        else {
            if (count == 1) {
                str = str + chars[l]
            }
            else {
                str = str + chars[l] + count
            }
            l = i
            count = 1

        }
    } if (str.length == 0) {
        str = str + chars[0]
    }
    str = str.split('')
    for (let i = 0; i <= str.length - 1; i++) {
        chars[i] = str[i]
    }
    return str.length

};