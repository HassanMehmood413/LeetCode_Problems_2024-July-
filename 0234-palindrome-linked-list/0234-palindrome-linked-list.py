# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        arr = []
        current = head
        while current is not None:
            arr.append(current.val)
            current = current.next
        return arr == arr[::-1]
