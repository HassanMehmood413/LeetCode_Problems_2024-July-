# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if not subRoot:
            return True
        if not root:
            return False
        queue = [root]

        while queue:
            current = queue.pop(0)

            if current.val == subRoot.val and self.sametree(current, subRoot):
                return True
            if current:
                if current.left:
                    queue.append(current.left)
                if current.right:
                    queue.append(current.right)

        return False



    def sametree(self,root,subRoot):
        if not root or not subRoot:
            return root == subRoot
        return root.val == subRoot.val and self.sametree(root.left,subRoot.left) and self.sametree(root.right , subRoot.right)
