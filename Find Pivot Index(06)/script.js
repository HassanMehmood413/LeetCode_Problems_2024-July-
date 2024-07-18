let nums = [1,7,3,6,5,6]
let sum = 0
for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
}
let sum2 = 0
let ls = 0
for (let j = 0; j < nums.length; j++) {
    if(ls == (sum - ls - nums[j])){
        console.log(j)
    }
    console.log(ls)
    ls = ls + nums[j]

    

}
console.log('-1')