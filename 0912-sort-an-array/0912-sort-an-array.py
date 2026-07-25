class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        

        def partition(arr, low, high):
            r = random.randint(low, high)          
            arr[low], arr[r] = arr[r], arr[low]
            lt = low
            i = low
            gt = high
            pivot = arr[low]

            while i<=gt:
                if arr[i] < pivot:
                    arr[i],arr[lt] = arr[lt],arr[i]
                    i+=1;
                    lt+=1;
                elif arr[i] > pivot:
                    arr[i],arr[gt] = arr[gt],arr[i]
                    gt-=1;
                else:
                    i+=1;
            return lt,gt
 
        def quicksort(arr, low, high):
            if low < high:
                lt,gt = partition(arr, low, high)

                quicksort(arr, low, lt-1)
                quicksort(arr, gt+1, high)


        quicksort(nums, 0, len(nums)-1)
        return nums

        