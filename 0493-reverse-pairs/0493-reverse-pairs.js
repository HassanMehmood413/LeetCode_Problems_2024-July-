/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    return mergeSortAndCount(nums, 0, nums.length - 1);
};
function mergeSortAndCount(nums, start, end) {
    if (start >= end) return 0
    let mid = Math.floor((start + end) / 2)
    let count = mergeSortAndCount(nums, start, mid) + mergeSortAndCount(nums, mid + 1, end)

    let j = mid + 1
    for (let i = start; i <= mid; i++) {
        while (j <= end && nums[i] > 2 * nums[j]) {
            j++
        }
        count += j - (mid + 1)
    }



    merge(nums, start, mid, end)
    return count
}
function merge(nums, start, mid, end) {
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

