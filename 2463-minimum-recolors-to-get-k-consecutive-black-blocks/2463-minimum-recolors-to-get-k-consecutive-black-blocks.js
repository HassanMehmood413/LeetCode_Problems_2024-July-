/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let temp = ''
    let min = Infinity
    let i = 0
    while (i < blocks.length) {

        temp = temp + blocks[i]
        if (temp.length == k) {
            total = count_W(temp)
            min = Math.min(total, min)
            temp = temp.slice(1)
        }
        i++
    }
    return min
};
var count_W = function (temp) {
    let res = 0;
    for (let j = 0; j < temp.length; j++) {
        if (temp[j] == 'W') res++;
    }
    return res
}