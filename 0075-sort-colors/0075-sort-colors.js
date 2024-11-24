/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // let left = 0, mid = 0, right = nums.length - 1
    // while (mid <= right) {
    //     if (nums[mid] == 0) {
    //         [nums[left], nums[mid]] = [nums[mid], nums[left]]
    //         left++
    //         mid++
    //     }
    //     else if (nums[mid] == 1) {
    //         mid++
    //     }
    //     else {
    //         [nums[mid], nums[right]] = [nums[right], nums[mid]]
    //         right--
    //     }
    // } return nums

    comp(nums, 0, nums.length - 1)
    return nums
};
function comp(nums, start, end) {
    if (start >= end) return 0
    let mid = Math.floor((start + end) / 2)
    comp(nums, start, mid)
    comp(nums, mid + 1, end)
    merge(nums, start, mid, end)
}
function merge(nums, start, mid, end) {
    let left = start
    let right = mid + 1
    let temp = []
    while (left <= mid && right <= end) {
        if (nums[left] <= nums[right]) {
            temp.push(nums[left])
            left++
        }
        else {
            temp.push(nums[right])
            right++
        }
    }
    while (left <= mid) {
        temp.push(nums[left])
        left++
    }
    while (right <= end) {
        temp.push(nums[right])
        right++
    }
    for (let i = start; i <= end; i++) {
        nums[i] = temp[i - start]
    }
}