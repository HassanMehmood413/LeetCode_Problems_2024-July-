/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let j = 0
    let count = 0
    let max = 0
    let p;
    for (let i = 0; i <= words.length - 1; i++) {
        p = words[i].split('')
        j = 0
        while (j <= words[i].length) {
            if (allowed.includes(p[j])) {
                count++
            }
            else if (count == words[i].length) {
                max = max + 1
                count = 0
            }
            else {
                count = 0
            }
            j++;
        }
    }
    return max
};