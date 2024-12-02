/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    sentence = sentence.split(' ')
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].startsWith(searchWord)) {
            return i + 1
        }
    }
    return -1
};