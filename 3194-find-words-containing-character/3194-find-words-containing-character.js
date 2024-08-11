/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let arr = []
    for (let i = 0; i <= words.length - 1; i++) {
        if (words[i].includes(x)){
            arr.push(i)
        }
    }
    return arr
};