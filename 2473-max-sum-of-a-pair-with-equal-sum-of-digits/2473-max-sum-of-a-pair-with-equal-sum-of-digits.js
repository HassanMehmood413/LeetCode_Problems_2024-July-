/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
    // with sorting 

    // let arr = []
    // let map = new Map()
    // for (let i = 0; i < nums.length; i++) {
    //     let number = nums[i]
    //     sum = sumOfDigits(number)
    //     if (!map.has(sum)) {
    //         map.set(sum, [])
    //     }
    //     map.get(sum).push(number)
    // }
    // let maxsum = -1
    // for (let values of map.values()) {
    //     if (values.length > 1) {
    //         values.sort((a, b) => b - a); 
    //         maxsum = Math.max(maxsum, values[0] + values[1])
    //     }
    // }

    // return maxsum


    // With Sorting
    let maxsum = -1
    let map = {}

    for (let i = 0; i < nums.length; i++) {
        let digitsum = sumOfDigits(nums[i])
        if (map[digitsum]) {
            maxsum = Math.max(maxsum, map[digitsum] + nums[i])
            map[digitsum] = Math.max(map[digitsum], nums[i])
        }
        else {
            map[digitsum] = nums[i]
        }
    }
    return maxsum

};

function sumOfDigits(n) {
    let total = 0;
    while (n > 0) {
        total += n % 10;
        n = Math.floor(n / 10);
    }
    return total;
}
