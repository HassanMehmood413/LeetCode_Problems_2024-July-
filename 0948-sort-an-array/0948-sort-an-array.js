/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    comp(nums, 0, nums.length - 1)
    return nums
};
var comp = function (nums, left, right) {
    if (left >= right) return 0
    let mid = Math.floor((left + right) / 2)
    comp(nums, left, mid)
    comp(nums, mid + 1, right)
    merge(nums, left, mid, right)
}
var merge = function (nums, start, mid, end) {
    let temp = []
    let left = start
    let right = mid + 1
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