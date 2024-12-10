# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def insertIntoBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        node = TreeNode(val)
        if not root:
            return node

        curr = root
        while curr:
            if val < curr.val:
                if not curr.left:
                    curr.left = node
                    break
                else:
                    curr = curr.left
            elif val > curr.val:
                if not curr.right:
                    curr.right = node
                    break
                else:
                    curr = curr.right
            else:
                # If the value already exists, we do nothing
                return root

        return root