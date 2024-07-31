/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let r = numbers.length - 1
    let l = 0
    do {

        if (numbers[r] + numbers[l] > target) {
            r = r - 1
        }
        else if (numbers[r] + numbers[l] < target) {
            l = l + 1
        }
        else {
            l++;
            r++;
            return [l, r]
        }
    }
    while (l < r)
}