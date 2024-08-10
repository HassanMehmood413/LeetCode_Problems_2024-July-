/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    let count = 0
    for (let i = 0; i <= words.length - 1; i++) {
        if (words[i].startsWith(pref)){
            count++
        }
    }
    return count
}