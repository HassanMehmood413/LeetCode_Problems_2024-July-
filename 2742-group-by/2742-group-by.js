/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let obj = {}
    for(let i of this){
        let key = fn(i)
        if(obj[key] == undefined){
            obj[key] = []
        }
        obj[key].push(i)
    }
    return obj
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */