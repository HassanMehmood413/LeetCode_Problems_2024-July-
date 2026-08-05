class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return len(nums)

        i = 0
        j = i+1
        temp = []

        while j <= len(nums)-1:
            if nums[i] == nums[j]:
                temp.append(j)
            elif nums[i] != nums[j] and len(temp) > 0:
                index = temp[0]
                nums[index] = nums[j]
                temp.pop(0)
                i+=1
                if nums[i] == nums[j]:
                    temp.append(j)
            else:
                # Different elements, but no duplicates need replacing
                i += 1
            j+=1

        nums[i+1:] = []
        return len(nums)
