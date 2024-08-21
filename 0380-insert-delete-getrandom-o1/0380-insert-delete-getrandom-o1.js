
var RandomizedSet = function() {
    let set = new Set()
    array = Array.from(set)
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(array.includes(val)){
        return false
    }
    else{
        array.push(val)
        return true
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(array.includes(val)){
        index = array.indexOf(val)
        array.splice(index,1)
        return true
    }
    else{
        return false
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let random = Math.floor(Math.random() * array.length)
    return array[random]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */