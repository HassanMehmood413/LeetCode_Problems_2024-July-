/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
//    time complexity : 0(n)
//     space compexity : 0(n)
//     let alice = []
//     let bob = []
//     for (let i = 0; i < nums.length; i++) {
//         a = nums[i].toString().split('').length
//         if (a == 1) {
//              alice.push(nums[i])
//         }
//         else {
//             bob.push(nums[i])
//         }
//     }
//     let b = alice.reduce((a, b) => a + b, 0);
//     let c = bob.reduce((a, b) => a + b, 0);
//     if (b != c) {
//         return true
//     }
//     else {
//         return false
//     }


    //Optimize Solution:
    // Time complexity: 0(n)
    // Space Complexity: 0(1)
    let alice = 0
    let bob = 0
    for (let i = 0; i < nums.length; i++) {
        a = nums[i].toString().split('').length
        if (a == 1) {
            alice = alice + nums[i]
        }
        else {
            bob = bob + nums[i]
        }
    }
    if (alice != bob) {
        return true
    }
    else {
        return false
    }

};