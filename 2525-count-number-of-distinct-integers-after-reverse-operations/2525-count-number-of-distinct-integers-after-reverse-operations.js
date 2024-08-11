/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
    length = 2 * nums.length
    let array = Array(length).fill(0)
    let i = 0
    let j = 0
    while (i < length / 2) {
        array[i] = nums[j]
        i++
        j++
    }
    let k = length / 2
    let l = 0
    while (k < length) {
        a = nums[l].toString().split('').reverse().join("")
        a = Number(a)
        array[k] = a
        k++
        l++
    }
    let set = new Set(array)
    return set.size
};