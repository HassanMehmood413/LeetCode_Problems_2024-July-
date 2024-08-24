/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
    // Using BFS

    // let queue = [root]
    // let arr = []
    // while (queue.length > 0) {
    //     let length = queue.length
    //     let sum = 0
    //     for (let i = 0; i < length; i++) {
    //         let first = queue.shift()
    //         sum = sum + first.val
    //         if (first.left != null) {
    //             queue.push(first.left)
    //         }
    //         if (first.right != null) {
    //             queue.push(first.right)
    //         }
    //     }
    //     arr.push(sum)
    // }
    // arr.sort((a,b)=>b-a)
    // if(arr.length >= k){
    //     return arr[k-1]
    // }
    // else{
    //     return -1
    // }

    // Using DFS
    let stack = [root];
    let arr = [];

    while (stack.length > 0) {
        let length = stack.length;
        let sum = 0;

        // Temporary array to hold nodes for the next level
        let tempStack = [];

        for (let i = 0; i < length; i++) {
            let node = stack.pop(); 
            sum += node.val;
            if (node.left) {
                tempStack.push(node.left);
            }
            if (node.right) {
                tempStack.push(node.right);
            }
        }

        arr.push(sum);

        // After processing the current level, push all nodes in tempStack
        // back to the main stack in the order they should be processed
        stack = tempStack;
    }

    arr.sort((a, b) => b - a);
    if (arr.length >= k) {
        return arr[k - 1]
    }
    else {
        return -1
    }

};