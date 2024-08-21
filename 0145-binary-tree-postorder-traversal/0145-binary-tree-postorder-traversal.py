# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        
        res = []  # This list will store the inorder traversal
        def rec(node):
            if node:
                rec(node.left)    # Traverse left subtree
                rec(node.right)   # Traverse right subtree
                res.append(node.val)  # Visit node
        rec(root)  # Start the recursion with the root node
        return res  # Return the result