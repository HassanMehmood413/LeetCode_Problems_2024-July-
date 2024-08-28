var twoSum = function (nums, target) {
    // for (let i = 0; i <= nums.length; i++) {
    //     for ( j = 1; j <= nums.length; j++) {
    //         if (nums[i] + nums[j] == target && i!=j) {
    //             return [i, j]
    //         }

    //     }
    // }


    let map = new Map()
    let index = 0
    let index2 = 0
    for (let i = 0; i < nums.length; i++){
        a = target - nums[i]
        if(map.has(a)){
            index = map.get(a)
            index2 = i
        }
        map.set(nums[i],i)
    }
    return [index,index2]

    
}