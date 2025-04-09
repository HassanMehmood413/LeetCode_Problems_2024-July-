/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let op = 0
    while (true) {
        let check = false
        let set = new Set()
        for (let i = 0; i < nums.length; i++) {
            if (set.has(nums[i])) {
                check = true
                break
            }
            set.add(nums[i])
        }
        if(!check) break
        nums.splice(0,3)
        op++
    }
    return op
};

