class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        map = {}
        for i in range(len(nums)):
            if nums[i] in map:
                map[nums[i]] = map[nums[i]] + 1
            else:
                map[nums[i]] = 1
        arr = []
        length = len(nums)
        for value,index in map.items():
            if index > (length/3):
                arr.append(value)
        return arr