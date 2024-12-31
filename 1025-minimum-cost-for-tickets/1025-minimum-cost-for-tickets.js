/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
    const maxDay = days[days.length - 1]; 
    const travelDay = new Array(maxDay + 1).fill(false); 

    for (const day of days) {
        travelDay[day] = true;
    }

    const dp = new Array(maxDay + 1).fill(0); 
    for (let i = 1; i <= maxDay; i++) {
        if (!travelDay[i]) {
            dp[i] = dp[i - 1]; 
            continue;
        }

        dp[i] = costs[0] + dp[i - 1]; 
        dp[i] = Math.min(dp[i], costs[1] + dp[Math.max(0, i - 7)]);
        dp[i] = Math.min(dp[i], costs[2] + dp[Math.max(0, i - 30)]); 
    }

    return dp[maxDay]; 

};