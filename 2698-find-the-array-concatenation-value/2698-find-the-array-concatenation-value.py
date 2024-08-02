class Solution:
    def findTheArrayConcVal(self, nums: List[int]) -> int:
        i = 0
        r = len(nums)-1
        str1 = ''
        num = 0
        while i<=r:
            if len(nums) == 1:
                num = int(nums[i]) + num
                return num
            str1 = str(nums[i])+str(nums[r])
            num = int(str1)+num
            nums.pop(i)
            nums.pop(r-1)
            r-=2
        return num
