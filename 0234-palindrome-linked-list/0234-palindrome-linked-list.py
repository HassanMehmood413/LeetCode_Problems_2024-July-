# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        str1 = ""
        str2 = ""
        current = head

        while current is not None:
            str1 += str(current.val)  # Append current value to str1
            str2 = str(current.val) + str2  # Prepend current value to str2
            current = current.next

        return str1 == str2