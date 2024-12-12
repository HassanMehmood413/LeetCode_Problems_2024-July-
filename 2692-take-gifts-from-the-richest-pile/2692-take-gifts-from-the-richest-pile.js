/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
    while (k > 0) {
        let max = Math.max(...gifts)
        let index = gifts.indexOf(max)
        let sqrt = Math.floor(Math.sqrt(max))
        gifts[index] = sqrt
        k--
    }
    let sum = gifts.reduce((a, v) => a + v, 0)
    return sum
};