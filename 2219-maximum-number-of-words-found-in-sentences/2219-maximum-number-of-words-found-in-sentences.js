/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let max = -Infinity
    for (let i = 0; i < sentences.length; i++) {
        a = sentences[i].split(' ')
        if (a.length > max) {
            max = a.length
        }
    }
    return max
};