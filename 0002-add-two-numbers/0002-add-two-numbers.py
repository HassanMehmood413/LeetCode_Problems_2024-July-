# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        list1 = l1
        list2 = l2
        carry = 0
        dummy = ListNode()
        tail = dummy
        sums = 0
        while list1 or list2 or carry:
            first = list1.val if list1 else 0
            second = list2.val if list2 else 0
            sums = first + second + carry
            carry = sums // 10
            sums = sums % 10
            tail.next = ListNode(sums)
            tail = tail.next
            list1= list1.next if list1 else None
            list2 = list2.next if list2 else None
        return dummy.next
