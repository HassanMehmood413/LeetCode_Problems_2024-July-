/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let dp = Array.from({ length: word1.length + 1 }, () => Array(word2.length + 1).fill(0))
    dp[word1.length][word2.length] = 0

    for (let i = 0; i < word2.length + 1; i++) {
        dp[word1.length][i] = word2.length - i
    }
    for (let i = 0; i < word1.length + 1; i++) {
        dp[i][word2.length] = word1.length - i
    }

    for (let i = word1.length - 1; i >= 0; i--) {
        for (let j = word2.length - 1; j >= 0; j--) {
            if (word1[i] === word2[j]) {
                dp[i][j] = dp[i + 1][j + 1]
            }
            else {
                dp[i][j] = Math.min(dp[i][j + 1], dp[i + 1][j], dp[i + 1][j + 1]) + 1
            }
        }
    }
    return dp[0][0]
};