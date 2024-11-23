/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map()
    for(let i = 0;i<nums.length;i++){
        let a = target - nums[i]
        if (map.has(a)) {
            return [map.get(a), i]
        }
        map.set(nums[i], i)
    }
};