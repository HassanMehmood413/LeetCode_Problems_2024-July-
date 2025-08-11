/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let first_w = 0
    let second_w = 0
    let comb = ""
    let count_alter = 0
    let length = word1.length > word2.length ? word1.length : word2.length
    while (first_w < word1.length || second_w < word2.length) {
        if (count_alter % 2 == 0 && first_w < word1.length) {
            comb += word1[first_w]
            first_w++
        }
        else if (count_alter % 2 !== 0 && second_w < word2.length) {
            comb += word2[second_w]
            second_w++
        }
        count_alter++
    }
    return comb
};