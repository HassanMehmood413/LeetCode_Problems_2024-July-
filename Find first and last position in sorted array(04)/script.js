let nums = [1,4]
let target = 4
let star = 0
let end = nums.length - 1

for (let i = 0; i < nums.length; i++) {
    if(nums[star] != target){
        star++
    }
    if(nums[end] !=target){
        end--
    }
}
if(end == -1){
    console.log([-1,-1])
}
console.log([star,end])