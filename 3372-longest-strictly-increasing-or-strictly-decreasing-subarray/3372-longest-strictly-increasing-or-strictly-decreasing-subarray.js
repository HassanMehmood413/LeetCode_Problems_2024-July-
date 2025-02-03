/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    let dec = 1
    let inc = 1
    let maxin = 1
    let maxde = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            inc++
            maxin = Math.max(maxin, inc)
            dec = 1
        }
        else if (nums[i] < nums[i - 1]) {
            dec++
            maxde = Math.max(maxde, dec)
            inc = 1
        }
        else if (nums[i] == nums[i - 1]){
            inc = 1
            dec = 1
        }

    }
    let overall = Math.max(maxde, maxin)
    return overall

};