/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function (nums, queries, x) {
    indices = []
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == x) {
            indices.push(i)
        }
    }
    console.log(indices)
    for (let i = 0; i < queries.length; i++) {
        if (queries[i] <= indices.length) {
            arr.push(indices[queries[i] - 1])
        }
        else {
            arr.push(-1)
        }
    }
    return arr
};