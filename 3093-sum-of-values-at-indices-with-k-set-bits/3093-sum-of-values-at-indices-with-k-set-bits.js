/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let b = BigInt(i).toString(2)
        arr.push(b)
    }
    let count = 0
    let sum = 0
    for (let j = 0; j < arr.length; j++) {
        let c = arr[j].split("")
        for (let l = 0; l < c.length; l++) {
            if (c[l] == '1') {
                count++
            }
        }
        if (count == k) {
            sum = sum + nums[j]
            count = 0
        }
        else {
            count = 0
        }
    }
    return sum
};