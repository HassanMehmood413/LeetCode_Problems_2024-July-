/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
    let wordfreq = new Map();
    let result = [];

    for (let i = 0; i < words2.length; i++) {
        let freq = new Map();
        for (const char of words2[i]) {
            freq.set(char, (freq.get(char) || 0) + 1);
        }
        for (const [char, count] of freq.entries()) {
            wordfreq.set(char, Math.max(wordfreq.get(char) || 0, count));
        }
    }

    for (let i = 0; i < words1.length; i++) {
        let totalfrequency = new Map();

        for (const char of words1[i]) {
            totalfrequency.set(char, (totalfrequency.get(char) || 0) + 1);
        }

        let valid = true;
        for (const [char, count] of wordfreq.entries()) {
            if ((totalfrequency.get(char) || 0) < count) {
                valid = false;
                break;
            }
        }

        if (valid) {
            result.push(words1[i]);
        }
    }

    return result
};