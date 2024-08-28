/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // let left = 0
    // let right = height.length - 1
    // let max = 0
    // while(left<right){
    //     Area = (right-left) * Math.min(height[left],height[right])
    //     max = Math.max(max,Area)
    //     if(height[left]<height[right]){
    //         left++
    //     }
    //     else{
    //         right--
    //     }
    // }
    // return max




    let left = 0
    let right = height.length - 1
    let res = 0
    while(left < right){
        area = (right - left) * Math.min(height[left],height[right])
        res = Math.max(res,area)
        if(height[left] < height[right]){
            left++
        }
        else{
            right--
        }
    }
    return res

};