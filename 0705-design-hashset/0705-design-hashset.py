class MyHashSet:

    def __init__(self):
        self.buckets = [[] for _ in range(1000)]

    def _index(self, key):
        return key % 1000

    def add(self, key: int) -> None:
        bucket = self.buckets[self._index(key)]
        if key not in bucket:
            bucket.append(key)

    def remove(self, key: int) -> None:
        bucket = self.buckets[self._index(key)]
        if key in bucket:
            bucket.remove(key)

    def contains(self, key: int) -> bool:
        return key in self.buckets[self._index(key)]


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)