/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    // s = s.split('')
    let arr = []
    // for (let i = 0; i < s.length; i++) {
    //     if (String(s[i])) {
    //         for (let j = i; j < s.length; j++) {
    //             if (Number(s[j])) {
    //                 arr.push([i, j])
    //                 break
    //             }
    //         }
    //         if (arr.length == 0) {
    //             break
    //         }
    //     }
    // }
    // console.log(arr)
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i]) && s[i] !== ' ') { 
            let j = i - 1
            while (j >= 0) {
                if (isNaN(s[j])) {
                    s.splice(i, 1)
                    s.splice(j, 1)
                    i -= 2
                    break
                }
                j--
            }
        }

    }
    return s.join('')
};