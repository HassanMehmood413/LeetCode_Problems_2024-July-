/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
    sentence = sentence.split(" ")
    let first = sentence[0][0]
    let last = sentence[sentence.length - 1].length - 1
    let last_word = sentence[sentence.length - 1][last]
    if (first == last_word) {
        for (let i = 1; i < sentence.length; i++) {
            if (sentence[i - 1][sentence[i - 1].length - 1] !== sentence[i][0]){
                return false
            }
        }
        return true
    }
    else {
        return false
    }
};