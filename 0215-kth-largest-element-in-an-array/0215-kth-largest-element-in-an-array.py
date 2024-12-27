class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        pq = nums[:k]
        heapq.heapify(pq)

        for i in range(k, len(nums)):
            if nums[i] > pq[0]:
                heapq.heappop(pq)
                heapq.heappush(pq, nums[i])
        return heapq.heappop(pq)
