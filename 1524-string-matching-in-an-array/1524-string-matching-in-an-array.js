/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    let allwords = words.join("#")
    let result = []
    for (let word of words) {
        if (allwords.indexOf(word) !== allwords.lastIndexOf(word)) {
            result.push(word)
        }
    }
    return result
};