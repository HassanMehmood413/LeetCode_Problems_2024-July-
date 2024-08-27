/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.map = {}
    let length = nums.length
    for (let i = 0; i < length; i++) {
        if (!(nums[i] in this.map)) {
            this.map[nums[i]] = []
        }
        this.map[nums[i]].push(i)
    }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    const indexes = this.map[target]
    return indexes[Math.floor(Math.random() * indexes.length)]

};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */