/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.arr = []
   let current = head
   while(current != null){
    this.arr.push(current)
    current = current.next
   }
   this.length = this.arr.length
    
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let a = Math.floor(Math.random()*this.length)
    return this.arr[a].val
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */