/**
    * @return {void}
    * @return {number}
    * @param {number} capacity
    * @param {number} key
    * @param {number} value
 */
class Node {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.prev = this.next = null
    }
}


var LRUCache = function (capacity) {
    this.map = new Map()
    this.left = new Node(0, 0)
    this.right = new Node(0, 0)
    this.cap = capacity
    this.left.next = this.right
    this.right.prev = this.left
};

LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        let u = this.map.get(key)
        this.remove(u)
        this.insert(u)
        return u.val
    }
    return -1
};


LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        this.remove(this.map.get(key))
    }
    let node = new Node(key, value)
    this.map.set(key, node)
    this.insert(node)

    if (this.map.size > this.cap) {
        let l = this.right.prev
        this.remove(l)
        this.map.delete(l.key)
    }
};


LRUCache.prototype.insert = function (node) {
    node.prev = this.left
    node.next = this.left.next
    this.left.next.prev = node
    this.left.next = node
}

LRUCache.prototype.remove = function (node) {
    node.prev.next = node.next
    node.next.prev = node.prev
}



/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */