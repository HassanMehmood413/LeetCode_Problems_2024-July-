class Solution:
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        sets = set()
        sums = 0
        maxs = 0
        left = 0
        for right in range(0, len(nums)):
            while nums[right] in sets:
                sums = sums - nums[left]
                sets.remove(nums[left])
                left+=1
            sets.add(nums[right])
            sums = sums + nums[right]

            while right- left + 1> k:
                sums = sums - nums[left]
                sets.remove(nums[left])
                left+=1
            if right - left +1 == k:
                maxs = max(maxs,sums)
        return maxs
