
var TimeMap = function () {
    this.store = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.store.has(key)) {
        this.store.set(key, [])
    }
    this.store.get(key).push([value, timestamp])
    console.log(this.store)
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    let ans = ""
    if (!this.store.has(key)) return ans
    let arr = this.store.get(key)
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let [v, t] = arr[mid]

        if (t <= timestamp) {
            ans = v
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return ans


};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */