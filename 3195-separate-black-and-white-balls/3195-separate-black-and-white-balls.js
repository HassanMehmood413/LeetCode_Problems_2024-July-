/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function (s) {
    // s = s.split('')
    // let left = 0
    // let right = s.length - 1
    // let count = 0
    // while (left < right) {
    //     while (left < right && s[left] == "0") left++
    //     while (left < right && s[right] == "1") right--
    //     if (s[left] == "1" && s[right] == "0") {
    //         count++
    //         [s[left], s[right]] = [s[right], s[left]]
    //         left++
    //         right--
    //     }
    // }
    // return count


    let a = 0
    let res = 0
    let i = 0
    while (i <= s.length - 1){
        if(s[i] == "0"){
            res+=a
        }
        else if(s[i] == "1"){
            a++
        }
        i++
    }
    return res



};