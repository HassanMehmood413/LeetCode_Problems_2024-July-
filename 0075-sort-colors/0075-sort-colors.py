class Solution:
    def sortColors(self, nums: List[int]) -> None:
        lt = 0
        gt = len(nums)-1
        i = 0
        pivot = 1

        while i <= gt:
            if nums[i] < pivot:
                nums[i],nums[lt] = nums[lt],nums[i]
                lt+=1;
                i+=1;
            elif nums[i] > pivot:
                nums[i],nums[gt]=nums[gt],nums[i]
                gt-=1;
            else: 
                i+=1;
        