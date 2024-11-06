/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i].toString(2).split('0').join("")
        let len = a.length
        arr.push(len)

    }
    let segments = []
    let current = [nums[0]]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] == arr[i]) {
            current.push(nums[i])
        }
        else {
            segments.push(current)
            current = [nums[i]]
        }
    }
    segments.push(current)
    for (let i = 1; i < segments.length; i++) {
        let max = Math.max(...segments[i - 1])
        let min = Math.min(...segments[i])
        if (max > min){
            return false
        }
    }
    return true

};