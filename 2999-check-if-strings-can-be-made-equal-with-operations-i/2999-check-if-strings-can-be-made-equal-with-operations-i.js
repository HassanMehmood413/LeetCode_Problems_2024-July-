/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function (s1, s2) {
    // s2 = s2.split("")
    // for (let i = 0; i < s2.length; i++) {
    //     for (let j = i; j < s2.length; j++) {
    //         if (j - i == 2) {
    //             let temp = s2[i]
    //             s2[i] = s2[j]
    //             s2[j] = temp
    //         }
    //     }
    // }
    // if (s1 == s2.join('')) {
    //     return true
    // }
    // else{
    //     return false
    // }

    let j = 1
    let i = 0
    s2 = s2.split("")
    while (i <= s2.length - 1) {
        if (j - i == 2 && s1[i] !== s2[i]) {
            let temp = s2[i]
            s2[i] = s2[j]
            s2[j] = temp
        }
        if (j < s2.length - 1) {
            j++
        }
        else {
            i++
            j = i + 1
        }
    }
    if (s1 == s2.join('')) {
        return true
    }
    else {
        return false
    }
};