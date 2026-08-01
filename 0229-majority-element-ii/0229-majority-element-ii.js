/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    rounded_number = Math.floor(nums.length / 3)
    let map = new Map()
    let ans = []

    nums.forEach((val, ind) => {
        if (map.has(val)) {
            map.set(val, map.get(val) + 1)
        }
        else {
            map.set(val, 1)
        }
    })
    for(let [val,ind] of map){
        if(ind > rounded_number){
            ans.push(val)
        }
    }
    return ans
};