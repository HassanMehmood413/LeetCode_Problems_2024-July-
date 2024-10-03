class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        copy = nums[:]
        arr = copy + nums
        return arr