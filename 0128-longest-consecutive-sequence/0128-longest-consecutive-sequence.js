/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // My Method Complexity 0(n2)

    // let count = 0
    // let map = new Map()
    // nums.forEach(element => {
    //     if (map.has(element)) {
    //         map.set(element, map.get(element) + 1)
    //     }
    //     else {
    //         map.set(element, 1)
    //     }
    // });
    // let max = 0
    // let array = nums
    // for (let i = 0; i < array.length; i++) {
    //     let a = array[i] - 1
    //     if (!map.has(a)) {
    //         for (let j = 0; j < array.length; j++) {
    //             a = a + 1
    //             if (map.has(a)) {
    //                 count++
    //             }
    //             else {
    //                 break
    //             }
    //         }
    //         if (count >= max) {
    //             max = count
    //             count = 0
    //         }
    //         else{
    //             count = 0
    //         }
    //     }
    // }
    // return max

    // Complexity : 0(n)
    let set = new Set(nums)
    let max = 0
    for (let num of set){
        if(!set.has(num-1)){
            currentstreak = 1
            currentnum =  num
            while(set.has(currentnum+1)){
                currentnum++
                currentstreak++
            }
            max = Math.max(currentstreak,max)
        }
    }
    return max
};