/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
    let ans = []
    vowels = ['a', 'e', 'i', 'o', 'u']
    // Check vowels strings in the words
    for (let i = 0; i < words.length; i++) {
        let First_char = words[i][0]
        let Last_char = words[i][words[i].length - 1]
        if (vowels.includes(First_char) && vowels.includes(Last_char)) {
            words[i] = 1
        }
        else {
            words[i] = 0
        }
    }
    // To make summarization of vowels strings
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i] + words[i - 1]
    }
    // Baki da kaam athey kita hy :) 
    for (let i = 0; i < queries.length; i++) {
        let first = queries[i][0]
        let second = queries[i][1]

        if (first == 0) {
            ans.push(words[second])
        }
        else {
            let subtract = Math.abs(words[second] - words[first - 1])
            ans.push(subtract)
        }
    }
    return ans
};