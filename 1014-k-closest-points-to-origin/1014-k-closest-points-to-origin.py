import heapq as heap


class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        minHeap = []
        for x, y in points:
            dist = sqrt(x**2 + y**2)
            minHeap.append((dist, [x, y]))

        heapq.heapify(minHeap)
        
        res = []
        for _ in range(k):
            dist,point = heapq.heappop(minHeap)
            res.append(point)
        return res