/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // Time Limit Exceed

    // let sum = 0
    // let min = Infinity
    // var again = function (coins, amount, index, sum) {
    //     if (sum == amount) {
    //         if (index < min) {
    //             min = index
    //         }
    //         return
    //     }
    //     if(sum > amount){
    //         return
    //     }
    //     for (let i = 0; i < coins.length; i++) {
    //         again(coins, amount, index + 1, sum + coins[i])
    //     }
    // }
    // again(coins,amount,0,sum)
    // return min == Infinity? -1


    // Now using dp appraoch
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]

};