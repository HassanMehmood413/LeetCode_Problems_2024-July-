/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
    arr.sort()
    target.sort()
    let count = 0
    for (let i = 0; i < target.length; i++) {
        if (target[i] == arr[i]) {
            count++
        }
        else {
            return false
        }

    }
    if(count == target.length){
        return true
    }
};