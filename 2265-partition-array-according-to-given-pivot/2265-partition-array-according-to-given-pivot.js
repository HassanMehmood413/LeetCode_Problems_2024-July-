/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    // let less_el = []
    // let big_el = []
    // let i = 0, j = 0;
    // let count_pivot = 0
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] == pivot) count_pivot++
    //     if (nums[i] < pivot) {
    //         less_el.push(nums[i])
    //     }
    //     else if (nums[i] > pivot) {
    //         big_el.push(nums[i])
    //     }
    // }
    // while (count_pivot > 0) {
    //     less_el.push(pivot)
    //     count_pivot--
    // }
    // return less_el.concat(big_el)
    let res = new Array(nums.length)
    let left = 0, right = 0, count_pivot = 0

    for (let num of nums) {
        if (num == pivot) count_pivot++
        if (num < pivot) res[left++] = num
    }

    while (count_pivot > 0) {
        res[left++] = pivot
        count_pivot--
    }

    for (let num of nums) {
        if (num > pivot) {
            res[left++] = num
        }
    }
    return res
};