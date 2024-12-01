class LFUCache {
    constructor(capacity) {
        this.cap = capacity
        this.counts = new Map()
        this.lists = new Map()
        this.vals = new Map()
        this.min = -1
        this.lists.set(1, new Set())
    }

    get(key) {
        if (!this.vals.has(key)) return -1


        const count = this.counts.get(key)
        this.counts.set(key, count + 1)
        this.lists.get(count).delete(key)


        if (count == this.min && this.lists.get(count).size == 0) this.min++

        if (!this.lists.has(count + 1)) {
            this.lists.set(count + 1, new Set())
        }

        this.lists.get(count+1).add(key)
        return this.vals.get(key)

    }

    put(key, value) {
        if (this.cap <= 0) return

        if (this.vals.has(key)) {
            this.vals.set(key, value)
            this.get(key)
            return
        }

        if (this.vals.size >= this.cap) {
            const evict = this.lists.get(this.min).values().next().value
            this.lists.get(this.min).delete(evict)
            this.vals.delete(evict)
            this.counts.delete(evict)
        }




        this.counts.set(key, 1)
        this.vals.set(key, value)
        this.min = 1
        this.lists.get(1).add(key)
    }
}
