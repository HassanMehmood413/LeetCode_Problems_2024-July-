/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
    word = word.split("")
    let str = ''
    let i = 0
    while (i < word.length) {
        let j = i + 1
        while (j < word.length && j - i < 9 && word[i] == word[j]) {
            j = j + 1
        }
        str = str + `${j - i}${word[i]}`
        i = j
    }
    return str
};