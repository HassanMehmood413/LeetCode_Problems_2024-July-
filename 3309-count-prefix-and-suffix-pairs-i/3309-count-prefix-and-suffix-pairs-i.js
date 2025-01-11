/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
    let count = 0

    let total = 0
    for (let j = 0; j < words.length - 1; j++) {
        str1 = words[j]
        for (let k = j + 1; k < words.length; k++) {
            str2 = words[k]
            if (str2.startsWith(str1) && str2.endsWith(str1)) {
                total++
            }
        }
    }
    count += total
    return count
};