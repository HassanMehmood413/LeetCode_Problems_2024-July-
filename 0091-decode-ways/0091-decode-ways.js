/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let dp = new Array(s.length + 1).fill(0)
    dp[s.length] = 1
    let res = 0
    var again = function (i) {
        if (dp[i] != 0) {
            return dp[i]
        }
        if (s[i] == "0") {
            return 0
        }

        res = again(i + 1)
        if (i + 1 < s.length && (s[i] == "1" || (s[i] == "2" && "0123456".includes(s[i + 1])))) {
            res += again(i + 2)
        }
        dp[i] = res
        return res
    }
    return again(0)
};