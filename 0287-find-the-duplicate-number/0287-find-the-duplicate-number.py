class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        map = {}
        for i in range(len(nums)):
            if nums[i] in map:
                map[nums[i]] = map[nums[i]] + 1
            else:
                map[nums[i]] = 1
        for value,index in map.items():
            if index > 1:
                return value