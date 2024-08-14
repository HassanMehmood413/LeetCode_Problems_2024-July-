/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
    if(nums.length < 2){
        return 0
    }
    nums.sort((a,b)=>a-b)
    let left = 0
    let max = 0
    let right = left + 1
    while (left <= nums.length - 2) {
        distance = Math.abs(nums[left] - nums[right])
        if(distance > max){
            max = distance
        }
        left++
        right = left + 1
    }
    return max
};