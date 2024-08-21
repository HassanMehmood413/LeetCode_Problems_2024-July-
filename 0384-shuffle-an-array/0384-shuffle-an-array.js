/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums
    this.nums_org = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums_org
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    let arr = []
    while (arr.length != this.nums.length) {
        let random = Math.floor(Math.random() * this.nums.length);
        let rand = this.nums[random]
        if (!arr.includes(rand)) {
            arr.push(rand)
        }
    }
    return arr

};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */