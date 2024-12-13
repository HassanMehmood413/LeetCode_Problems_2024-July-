class Solution:
    def findScore(self, nums):
        ans = 0
        marked = [False] * len(nums)

        heap = []
        for i in range(len(nums)):
            heapq.heappush(heap, (nums[i], i))

        while heap:
            number, index = heapq.heappop(heap)
            if not marked[index]:
                ans += number
                marked[index] = True
                # mark adjacent elements if they exist
                if index - 1 >= 0:
                    marked[index - 1] = True
                if index + 1 < len(nums):
                    marked[index + 1] = True

        return ans