/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
    let total = 0
    let good = 0
    let count = new Map()
    const MOD = 1e9 + 7;

    for (let i = 0; i < nums.length; i++) {
        total += i
        let rev = nums[i].toString().split('').reverse().join('')
        let key = nums[i] - Number(rev)
        if (count.has(key)) {
            good = (good + count.get(key)) % MOD
            count.set(key, count.get(key) + 1)
        }
        else {
            count.set(key, 1)
        }
    }
    return good
};