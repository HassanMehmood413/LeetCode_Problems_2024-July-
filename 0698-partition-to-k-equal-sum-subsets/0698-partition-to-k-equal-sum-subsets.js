/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    let sum = nums.reduce((a, b) => a + b, 0);
    if (sum % k !== 0) return false;
    let target = sum / k;

    nums.sort((a, b) => b - a); // Sort in descending order
    if (nums[0] > target) return false; // Early pruning

    let used = Array(nums.length).fill(false);

    function backtrack(kRemaining, start, currentSum) {
        if (kRemaining === 0) return true; // All subsets formed
        if (currentSum === target) {
            return backtrack(kRemaining - 1, 0, 0); // Start next subset
        }
        for (let i = start; i < nums.length; i++) {
            if (used[i] || currentSum + nums[i] > target) continue;
            used[i] = true;
            if (backtrack(kRemaining, i + 1, currentSum + nums[i])) return true;
            used[i] = false;
        }
        return false;
    }

    return backtrack(k, 0, 0);
};
