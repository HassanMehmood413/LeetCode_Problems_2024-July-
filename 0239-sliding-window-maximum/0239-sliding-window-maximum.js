/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    // let res = []
    // let left = 0
    // let i = k
    // while (left <= nums.length - i) {

    //     a = nums.slice(left, k)
    //     let max = Math.max(...a)
    //     res.push(max)
    //     left++
    //     k++

    // }

    // return res

    let result = []
    let deque = []
    for (let i = 0; i < nums.length; i++) {
        if (deque.length > 0 && deque[0] <= i - k) {
            deque.shift()
        }
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]){
            deque.pop()
        }
        deque.push(i)
        if(i>=k-1){
            result.push(nums[deque[0]])
        }
    }
    return result
};