class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        n = len(nums)
        def backtrack(current):
            if len(current) == n:
                if current not in nums:
                    return current
                return None





            for digit in ['0','1']:
                result = backtrack(current+digit)
                if result:
                    return result
            return None
        return backtrack('')