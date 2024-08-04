/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
    const MOD = 10 ** 9 + 7
    let length = nums.length;
    let result = [];

    // Iterate over all possible starting indices
    for (let start = 0; start < length; start++) {
        let currentSum = 0;
        // Iterate over all possible ending indices
        for (let end = start; end < length; end++) {
            // Add the current element to the current sum
            currentSum += nums[end];
            // Store the sum of the subarray from start to end
            result.push(currentSum);
        }
    }
    result.sort((a, b) => a - b)
    let sum = 0
    for (let i = left - 1; i < right; i++) {
        sum = (sum + result[i]) % MOD
    }
    return sum
};