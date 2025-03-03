/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let less_el = []
    let big_el = []
    let i = 0, j = 0;
    let count_pivot = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == pivot) count_pivot++
        if (nums[i] < pivot) {
            less_el.push(nums[i])
        }
        else if (nums[i] > pivot) {
            big_el.push(nums[i])
        }
    }
    while (count_pivot > 0) {
        less_el.push(pivot)
        count_pivot--
    }
    return less_el.concat(big_el)

};