/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let p = arr.filter((value,index)=>{
        return fn(value,index)
    })
    return p
};