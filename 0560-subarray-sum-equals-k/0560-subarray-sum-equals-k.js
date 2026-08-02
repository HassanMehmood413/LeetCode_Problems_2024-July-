/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let res = 0
    let curSum = 0
    let prefixsum = new Map()
    prefixsum.set(0, 1)

    for (let i = 0; i < nums.length; i++) {
        curSum += nums[i]
        diff = curSum - k

        res += prefixsum.get(diff) ?? 0
        prefixsum.set(
            curSum, 
            (prefixsum.get(curSum) ?? 0) + 1
        )
    }
    return res
};