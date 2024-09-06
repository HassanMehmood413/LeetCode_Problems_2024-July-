/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let max = 0
    let length = s.length
    for (let right = 65; right <= 90; right++) {
        let i = 0; j = 0; replace = 0
        while (j < length) {
            if (s[j] == String.fromCharCode(right)){
                j++
            }
            else if(replace < k){
                replace++
                j++
            }
            else if(s[i] == String.fromCharCode(right)){
                i++
            }
            else{
                replace--
                i++
            }
            max = Math.max(max,j-i)
        }
    }
    return max
};