# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def again(node, max_val):
            if not node:
                return 0

            # Check if the current node is "good"
            count = 1 if node.val >= max_val else 0

            # Update the maximum value for the path
            max_val = max(max_val, node.val)

            # Recursively count "good" nodes in left and right subtrees
            count += again(node.left, max_val)
            count += again(node.right, max_val)
            
            return count

        return again(root, root.val)