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
        
        queue = deque([root])
        while queue:
            current = queue.popleft()
            if current and current.val == subRoot.val and self.sametree(current, subRoot):
                return True
            if current:
                queue.append(current.left)
                queue.append(current.right)
        return False

    def sametree(self, root, subRoot):
        if not root and not subRoot:
            return True
        if root and subRoot and root.val == subRoot.val:
            return self.sametree(root.left, subRoot.left) and self.sametree(
                root.right, subRoot.right
            )
        return False