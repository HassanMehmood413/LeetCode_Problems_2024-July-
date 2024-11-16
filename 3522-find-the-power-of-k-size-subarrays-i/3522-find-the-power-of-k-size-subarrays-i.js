/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
    let arr = []
    let res = []
    for (let right = 0; right < nums.length; right++) {
        arr.push(nums[right])
        if (arr.length > k) {
            while (arr.length > k) {
                arr = arr.slice(1)
            }
        }
        if (arr.length == k) {
            let isvalid = true
            let i = 0
            while (i < arr.length-1) {
                if (arr[i] >= arr[i + 1]) {
                    isvalid = false
                }
                else if (arr[i] != arr[i + 1] - 1) {
                    isvalid = false
                }
                i++
            }
            if (isvalid == true) {
                let max = Math.max(...arr)
                res.push(max)
            }
            else {
                res.push(-1)
            }
        }

    }
    return res

}