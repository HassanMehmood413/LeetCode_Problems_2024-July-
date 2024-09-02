# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        # if root == None:
        #     return []
        # queue = deque([root])
        # arr = []
        # while len(queue) > 0:
        #     comb = []
        #     length = len(queue)
        #     for i in range(length):
        #         first = queue.popleft()
        #         comb.append(first.val)
        #         if first.left != None:
        #             queue.append(first.left)
        #         if first.right != None:
        #             queue.append(first.right)
        #     arr.append(comb)
        # return arr

        arr = []
        def again(root,level,arr):
            if root == None:
                return []
            if len(arr) == level:
                arr.append([])

            arr[level].append(root.val)

            again(root.left,level+1,arr)
            again(root.right,level+1,arr)
        
        again(root,0,arr)
        return arr















    #     if (!root) return []
    # let queue = [root]
    # let arr = []
    # let comb = []
    # while (queue.length > 0) {
    #     let length = queue.length
    #     comb = []
    #     for (let i = 0; i < length; i++) {
    #         let first = queue.shift()
    #         comb.push(first.val)
    #         if (first.left != null) {
    #             queue.push(first.left)
    #         }
    #         if (first.right != null) {
    #             queue.push(first.right)
    #         }
    #     }
    #     arr.push(comb)
    # }
    # return arr