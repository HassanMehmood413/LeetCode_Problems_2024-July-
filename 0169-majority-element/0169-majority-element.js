/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = new Map()
    nums.forEach((val, ind) => {
        if (map.has(val)) {
            map.set(val, map.get(val) + 1)
        }
        else {
            map.set(val, 1)
        }
    })
    let max_one = 0, answer;
    for (let [val, ind] of map) {
        if (ind > max_one) {
            max_one = ind
            answer = val
        }
    }
    return answer
};