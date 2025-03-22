/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let stack = []
    let sum = 0
    for(let i = 0;i<operations.length;i++){
        if(operations[i] == '+'){
            let sum = Number(stack[stack.length-1]) + Number(stack[stack.length-2])
            stack.push(sum)
        }
        else if(operations[i] == 'D'){
            let double = Number(stack[stack.length-1]) * 2
            stack.push(double)
        }
        else if(operations[i] == 'C'){
            stack.pop()
        }
        else{
            stack.push(operations[i])
        }
    }   
    sum = stack.reduce((a,v)=>Number(a)+Number(v),0)
    return sum == null?0:sum
    
};