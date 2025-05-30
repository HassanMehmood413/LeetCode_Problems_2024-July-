/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    // let res = []
    // var again = function (start, arr) {
    //     if (start == s.length) {
    //         res.push([...arr])
    //         return
    //     }

    //     for (let i = start; i < s.length; i++) {
    //         let str = s.slice(start,i+1)
    //         if (str.split('').reverse().join('') == str) {
    //             arr.push(str)
    //             again(i + 1,arr)
    //             arr.pop()
    //         }
    //     }
    // }
    // again(0, [])
    // return res

    let res = []
    var again = function (index, arr) {
        if (index == s.length) {
            res.push([...arr])
        }
        for (let i = index; i < s.length; i++) {
            let str = s.slice(index, i + 1)
            if (str.split("").reverse().join("") == str) {
                arr.push(str)
                again(i + 1, arr)
                arr.pop()
            }
        }
    }
    again(0, [])
    return res

};