/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    // let copy1 = [...nums]
    // copy1 = copy1.sort((a, b) => a - b)
    // copy1 = copy1.join(',')
    // if (nums.join(',') == copy1) return true
    // console.log(copy1)
    // for (let i = 0; i < nums.length - 1; i++) {
    //     let first = nums[i]
    //     let second = nums[i + 1]

    //     if (first > second) {
    //         let a = nums.slice(0, i + 1)
    //         let b = nums.slice(i + 1, nums.length)
    //         console.log(a, b)
    //         let new_a = b.concat(a)
    //         if (new_a.join(',') == copy1) {
    //             return true
    //         }
    //     }
    // }
    // return false

    let rp = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] < nums[i]) {
            rp++
        }
    }
    if (rp == 0) return true
    else if (rp == 1) {
        if (nums[0] >= nums[nums.length - 1]) return true
        else {
            return false
        }
    }
    else {
        return false
    }
};