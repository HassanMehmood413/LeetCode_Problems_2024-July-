/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    // let pairs = 0
    // for (let i = 0; i < dominoes.length; i++) {
    //     let check_pair = dominoes[i]
    //     pairs += check_others(dominoes, check_pair, i)
    // }
    // return pairs


    const map = new Map();
    let count = 0;

    for (const [a, b] of dominoes) {
        const key = a < b ? `${a},${b}` : `${b},${a}`;

        if (map.has(key)) {
            count += map.get(key);
            map.set(key, map.get(key) + 1);
        } else {
            map.set(key, 1);
        }
    }

    return count;

};

// var check_others = function (dominoes, check_pair, i) {
//     let first = check_pair[0]
//     let second = check_pair[1]
//     let count = 0
//     for (let j = i + 1; j < dominoes.length; j++) {
//         console.log(dominoes[j])
//         if ((dominoes[j][0] == first && dominoes[j][1] == second) || (dominoes[j][0] == second && dominoes[j][1] == first)) {
//             count++
//         }
//     }
//     return count
// }