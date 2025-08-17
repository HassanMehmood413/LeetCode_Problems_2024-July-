/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let first = 0
    let second = numbers.length - 1

    while (first <= second) {
        if (numbers[first] + numbers[second] > target) {
            second = second - 1
        }
        else if (numbers[first] + numbers[second] < target) {
            first = first + 1
        }
        else {
            first++
            second++
            return [first, second]
        }
    }
    return [second + 1, first + 1]
};
