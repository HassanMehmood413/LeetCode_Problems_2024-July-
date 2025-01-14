/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let i = 0
    let result = []
    while (i <= A.length) {
        let map1 = new Map()
        let map2 = new Map()
        let first = 0
        let second = 0
        let total = 0
        while (first < i) {
            map1.set(A[first], (map1.get(A[first]) || 0) + 1)
            first++
        }
        while (second < i) {
            map2.set(B[second], (map2.get(B[second]) || 0) + 1)
            second++
        }

        if (map1.size != 0 && map2.size != 0) {
            for (let [value, count] of map1.entries()) {
                if (map2.get(value) == count) {
                    total++
                }
            }
            result.push(total)
        }
        i++
    }
    return result

};
