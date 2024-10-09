
var TimeMap = function () {
    this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.map.has(key)) {
        this.map.set(key, [])
    }
    this.map.get(key).push([value, timestamp])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    let res = ''
    if(!this.map.has(key)) return res
    let left = 0
    let values = this.map.get(key, [])
    let right = values.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (values[mid][1] <= timestamp) {
            res = values[mid][0]
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return res
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */