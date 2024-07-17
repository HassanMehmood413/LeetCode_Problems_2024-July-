
let nums1 = [3]
let nums2 = [-2,-1]
let all = nums1.concat(nums2)
all.sort((a, b) => a - b);
console.log(all)
let k = parseInt(all.length / 2)

if (all.length % 2 != 0) {
    result = all[k]
    console.log(result)
}
else{
    result = all[k]+all[k-1]
    console.log(result)
}