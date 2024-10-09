class Node {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.prev = this.next = null
    }
}

class LRUCache {

    constructor(capacity) {
        this.map = new Map()
        this.left = new Node(0, 0)
        this.right = new Node(0, 0)
        this.cap = capacity
        this.left.next = this.right
        this.right.prev = this.left
    }

    /** 
     * @param {number} key
     * @return {number}
     */
    insert(node) {
        node.prev = this.left
        node.next = this.left.next
        this.left.next.prev = node
        this.left.next = node
    }
    remove(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    get(key) {
        if (this.map.has(key)) {
            const u = this.map.get(key)
            this.remove(u)
            this.insert(u)
            return u.val
        }
        return -1
    }

    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            this.remove(this.map.get(key))
        }
        const v = new Node(key, value)
        this.map.set(key, v)
        this.insert(v)

        if (this.map.size > this.cap) {
            const lru = this.right.prev
            this.remove(lru)
            this.map.delete(lru.key)
        }


    }
}


