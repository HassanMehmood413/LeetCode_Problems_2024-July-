/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
    let arr = []
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let number = nums[i]
        sum = sumOfDigits(number)
        if (!map.has(sum)) {
            map.set(sum, [])
        }
        map.get(sum).push(number)
    }
    let maxsum = -1
    for (let values of map.values()) {
        if (values.length > 1) {
            values.sort((a, b) => b - a); 
            maxsum = Math.max(maxsum, values[0] + values[1])
        }
    }

    return maxsum

};

function sumOfDigits(n) {
    let total = 0;
    while (n > 0) {
        total += n % 10;  // Extract the last digit
        n = Math.floor(n / 10);  // Remove the last digit
    }
    return total;
}
