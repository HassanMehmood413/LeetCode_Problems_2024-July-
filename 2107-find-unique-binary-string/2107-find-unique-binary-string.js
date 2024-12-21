/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    // let str = ''
    // let l = 0
    // for (let i = 0; i <= nums.length - 1; i++) {
    //     str += nums[i][i] == '0' ? '1' : '0'
    // }
    // return str

    var again = function (current) {
        if (current.length == nums.length) {
            if (!nums.includes(current)) {
                return current
            }
            else {
                return null
            }
        }


        for (let digit in ['0', '1']) {
            let result = again(current + digit)
            if (result) {
                return result
            }
        }
        return null
    }
    return again('')
};