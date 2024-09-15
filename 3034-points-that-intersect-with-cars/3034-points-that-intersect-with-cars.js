/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i][0]
        let b = nums[i][1]
        for (let j = a; j <= b; j++) {
            if (!set.has(j)) {
                set.add(j)
            }
        }
    }
    return set.size

};