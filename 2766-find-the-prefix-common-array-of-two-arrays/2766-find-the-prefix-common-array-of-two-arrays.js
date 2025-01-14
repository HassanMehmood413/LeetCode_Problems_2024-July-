/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    // My Solution 
    // let i = 0
    // let result = []
    // while (i <= A.length) {
    //     let map1 = new Map()
    //     let map2 = new Map()
    //     let first = 0
    //     let second = 0
    //     let total = 0
    //     while (first < i) {
    //         map1.set(A[first], (map1.get(A[first]) || 0) + 1)
    //         first++
    //     }
    //     while (second < i) {
    //         map2.set(B[second], (map2.get(B[second]) || 0) + 1)
    //         second++
    //     }

    //     if (map1.size != 0 && map2.size != 0) {
    //         for (let [value, count] of map1.entries()) {
    //             if (map2.get(value) == count) {
    //                 total++
    //             }
    //         }
    //         result.push(total)
    //     }
    //     i++
    // }
    // return result


    // Efficient Solution
    let set1 = new Set()
    let set2 = new Set()
    let result = []
    let common = 0
    for (let i = 0; i < A.length; i++) {
        set1.add(A[i])
        set2.add(B[i])

        if (A[i] == B[i]) {
            common++
        }
        else {
            if (set1.has(B[i])) {
                common++
            }
            if (set2.has(A[i])) {
                common++
            }
        }
        result.push(common)
    }
    return result

};
