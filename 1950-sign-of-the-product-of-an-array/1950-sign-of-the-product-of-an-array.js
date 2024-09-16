/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let prod = 1
    for (let i = 0; i < nums.length; i++){
        prod = prod * nums[i]
    }
    if(prod > 0){
        return 1
    }
    else if(prod < 0){
        return -1
    }
    else{
        return 0
    }
};