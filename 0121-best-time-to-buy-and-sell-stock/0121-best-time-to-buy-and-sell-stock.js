/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (nums) {
    let min = Infinity
    let max = 0
    for (let i = 0; i < nums.length; i++){
        if(nums[i] < min){
            min = nums[i]
        }
        let pro = nums[i] - min
        if(pro > max){
            max = pro
        }
    }
    return max
};