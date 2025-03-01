/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            nums[i] = nums[i] * 2
            nums[i + 1] = 0
        }
    }
    let stack = []
    for(let num of nums){
        if(num != 0){
            stack.push(num)
        }
    }
    while(stack.length < nums.length){
        stack.push(0)
    }
    return stack
};