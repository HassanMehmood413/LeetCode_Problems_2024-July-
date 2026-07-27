/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map()
    let ans = []
    nums.forEach((key, value) => {
        if (map.has(key)) {
            map.set(key, map.get(key) + 1)
        }
        else {
            map.set(key, 1)
        }
    })


    const sortedMap = [...map.entries()].sort((a, b) => b[1] - a[1])
    for (let i = 0; i < k; i++) {
        ans.push(sortedMap[i][0])
    }
    return ans

};