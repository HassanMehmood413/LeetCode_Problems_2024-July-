/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    // Not Working
    // let k = 0
    // let arr = []
    // for (let i = 0; i < s.length; i++) {
    //     for (let j = 0; j < s.length; j++) {
    //         let a = s.slice(i, j + 1)
    //         if (wordDict.includes(a) && !arr.includes(a)) {
    //             k++
    //             arr.push(a)
    //             break

    //         }
    //     }
    // }
    // if (k == wordDict.length) {
    //     return true
    // }
    // return false


    // Working
    let dp = new Array(s.length + 1).fill(false)
    dp[s.length] = true
    for (let i = s.length - 1; i >= 0; i--) {
        for (let w of wordDict) {
            if ((i + w.length) <= s.length && (s.slice(i, i + w.length) == w)) {
                dp[i] = dp[i + w.length]
            }
            if(dp[i] == true){
                break
            }
        }
    }
    return dp[0]
};