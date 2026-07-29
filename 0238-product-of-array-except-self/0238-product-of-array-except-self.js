/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let prefix_product = []
    let suffix_product = []
    let answer = []
    prefix_product[0] = 1


    for (let i = 1; i < nums.length; i++) {
        prefix_product[i] = prefix_product[i - 1] * nums[i - 1]
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i + 1] == undefined) {
            suffix_product[i] = 1
        }
        else {
            suffix_product[i] = suffix_product[i + 1] * nums[i + 1]
        }
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] = prefix_product[i] * suffix_product[i]
    }

    return answer

};