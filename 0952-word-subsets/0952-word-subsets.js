/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
    let wordfreq = new Map()
    let result = []

    for (let i = 0; i < words2.length; i++) {
        let freq = new Map()
        for (let words of words2[i]) {
            freq.set(words, (freq.get(words) || 0) + 1)
        }

        for (let [char, ind] of freq.entries()) {
            wordfreq.set(char, Math.max(wordfreq.get(char) || 0, ind))
        }
    }

    for (let i = 0; i < words1.length; i++) {
        let totalfrequency = new Map()

        for (let j = 0; j < words1[i].length; j++) {
            totalfrequency.set(words1[i][j], (totalfrequency.get(words1[i][j]) || 0) + 1)
        }

        // Now check the main thing
        let valid = true
        for (let [char, ind] of wordfreq.entries()) {
            if ((totalfrequency.get(char) || 0) < ind) {
                valid = false
                break
            }
        }
        if (valid == true) {
            result.push(words1[i])
        }

    }
    return result
};