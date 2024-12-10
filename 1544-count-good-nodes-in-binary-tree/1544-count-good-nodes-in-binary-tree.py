# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def again(node,max_val):
            if not node:
                return 0
            

            count = 1 if node.val >= max_val else 0

            max_val = max(max_val,node.val)  # 4 , 5

            count += again(node.left,max_val)
            count += again(node.right , max_val) # 3

            return count
        return again(root,root.val)
