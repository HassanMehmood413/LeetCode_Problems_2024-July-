/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    sentence = sentence.split('')
    for (let i = 97; i <= 122; i++) {
        a = String.fromCharCode(i)
        if (!sentence.includes(a)) {
            return false
        }
    }
    return true
};