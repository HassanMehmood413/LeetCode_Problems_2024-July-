class MyHashMap:

    def __init__(self):
        self.buckets = [[] for _ in range(1000)]

    def _index(self, key):
        return key % 1000

    def put(self, key: int, value: int) -> None:
        bucket = self.buckets[self._index(key)]
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value) 
                return
        bucket.append((key, value))

    def get(self, key: int) -> int:
        bucket = self.buckets[self._index(key)]
        for k,v in bucket:
            if k == key:
                return v
        return -1

    def remove(self, key: int) -> None:
        bucket = self.buckets[self._index(key)]
        for i, (k,v) in enumerate(bucket):
            if k == key:
                bucket.pop(i)
                return

# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)