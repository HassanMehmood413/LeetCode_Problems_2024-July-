/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let dp = Array.from({ length: text1.length + 1 }, () => Array(text2.length + 1).fill(-1))
    var again = function (i, j) {
        if (i >= text1.length || j >= text2.length) {
            return 0
        }
        else if (text1[i] == text2[j]) {
            return 1 + again(i + 1, j + 1)
        }
        else {
            if (dp[i][j] != -1) {
                return dp[i][j]
            }
            else {
                let a = Math.max(again(i + 1, j), again(i, j + 1))
                dp[i][j] = a
                return a
            }
        }
    }
    return again(0, 0)

};