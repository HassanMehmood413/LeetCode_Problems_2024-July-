/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let set = new Set()
    while (n != 1) {
        let sum = 0
        n = n.toString().split("")
        for (let i = 0; i < n.length; i++) {
            sum = Math.pow(Number(n[i]), 2) + sum
        }
        n = sum
        if(set.has(sum)){
            return false
        }
        set.add(sum)
    }
    if (n == 1) {
        return true
    }
    else{
        return false
    }
};