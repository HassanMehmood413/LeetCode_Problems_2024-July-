/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
    let wordfreq = new Map();
    let result = [];

    // Build the maximum frequency map for words2
    for (let i = 0; i < words2.length; i++) {
        let freq = new Map();
        for (const char of words2[i]) {
            freq.set(char, (freq.get(char) || 0) + 1);
        }
        for (const [char, count] of freq.entries()) {
            wordfreq.set(char, Math.max(wordfreq.get(char) || 0, count));
        }
    }

    // Check each word in words1
    for (let i = 0; i < words1.length; i++) {
        let totalfrequency = new Map();

        // Calculate frequency for the current word in words1
        for (const char of words1[i]) {
            totalfrequency.set(char, (totalfrequency.get(char) || 0) + 1);
        }

        // Check if the word is valid
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