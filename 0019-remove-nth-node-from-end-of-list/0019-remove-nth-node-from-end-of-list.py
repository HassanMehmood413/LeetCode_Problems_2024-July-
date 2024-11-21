# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        # slow = head
        # fast = head
        # for i in range(n):
        #     fast = fast.next
        # if not fast:
        #     return head.next
        # while fast.next is not None:
        #     slow = slow.next
        #     fast = fast.next
        # slow.next = slow.next.next
        # return head
        curr = head
        prev = None
        while curr:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp

        # Skip the nth node in the reversed list
        curr1 = prev
        dummy = ListNode()
        prev1 = dummy
        length = 0
        while curr1:
            if length != n - 1:  # Skip the nth node
                prev1.next = ListNode(curr1.val)
                prev1 = prev1.next
            length += 1
            curr1 = curr1.next

        # Reverse the list back
        curr2 = dummy.next
        prev2 = None
        while curr2:
            temp = curr2.next
            curr2.next = prev2
            prev2 = curr2
            curr2 = temp

        return prev2