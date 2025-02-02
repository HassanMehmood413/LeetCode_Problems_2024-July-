class Solution:
    def check(self, nums: List[int]) -> bool:
        copy1 = sorted(nums)

        if nums == copy1:
            return True

        for i in range(len(nums) - 1):
            if nums[i] > nums[i + 1]:
                new_list = nums[i + 1:] + nums[:i + 1]
                if new_list == copy1:
                    return True

        return False
