/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
    // By Using Recursion , It gives time limit exceeds
    // var find = function (arr) {
    //     if (arr.length === 1) return 1
    //     for (let i = 0; i < arr.length; i++) {
    //         let min = Math.min(...arr)
    //         let max = Math.max(...arr)
    //         return max - min <= 2 ? 1 : 0
    //     }
    // };

    // let res = [];

    // var again = function (score, res, nums, start, size) {
    //     if (start + size > nums.length) {
    //         res.push(score);
    //         return;
    //     }

    //     let subarray = nums.slice(start, start + size);
    //     let subScore = find(subarray);
    //     again(score + subScore, res, nums, start + 1, size);
    // };

    // let score = 0;
    // for (let size = 1; size <= nums.length; size++) {
    //     again(score, res, nums, 0, size);
    // }
    // let sum = res.reduce((a, c) => a + c, 0)
    // return sum

    let minQ = []
    let maxQ = []
    let left = 0
    let count = 0
    for (let right = 0; right < nums.length; right++) {
        while (minQ.length && nums[minQ[minQ.length - 1]] > nums[right]) {
            minQ.pop()
        }
        minQ.push(right)

        while (maxQ.length && nums[maxQ[maxQ.length - 1]] < nums[right]) {
            maxQ.pop()
        }
        maxQ.push(right)

        while (nums[maxQ[0]] - nums[minQ[0]] > 2) {
            if (maxQ[0] === left) maxQ.shift();
            if (minQ[0] === left) minQ.shift();
            left++
        }
        count += right - left + 1
    }
    return count
};