/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < nums.length; i++) {
        if (arr1.length == 0) {
            arr1.push(nums[i])
        }
        else if (arr2.length == 0) {
            arr2.push(nums[i])
        }
        else if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
            arr1.push(nums[i])
        }
        else {
            arr2.push(nums[i])
        }
    }
    return arr1.concat(arr2)
};