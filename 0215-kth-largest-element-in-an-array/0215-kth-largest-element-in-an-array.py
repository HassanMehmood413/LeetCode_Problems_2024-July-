import random

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        arr = nums
        target = len(arr) - k

        low = 0
        high = len(arr) - 1
        while True:
            pivot = arr[random.randint(low, high)]

            lt = low        # start of the "equal" pile
            i = low         # the one doing the looking
            gt = high       # end of the "equal" pile

            while i <= gt:
                if arr[i] < pivot:
                    arr[lt], arr[i] = arr[i], arr[lt]
                    lt += 1
                    i += 1
                elif arr[i] > pivot:
                    arr[i], arr[gt] = arr[gt], arr[i]
                    gt -= 1
                else:
                    i += 1

            if target < lt:
                high = lt - 1
            elif target > gt:
                low = gt + 1
            else:
                return pivot