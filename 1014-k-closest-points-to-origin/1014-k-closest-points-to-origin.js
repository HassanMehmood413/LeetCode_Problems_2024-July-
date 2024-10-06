/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    let map = []

    for (let i = 0; i < points.length; i++) {
        let a = points[i][0];
        let b = points[i][1];

        let distance = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        map.push([distance, points[i]]); 
    }

    map = map.sort((a, b) => a[0] - b[0])
    let res = []
    for (let i = 0; i < k; i++) {
        res.push(map[i][1]); 
    }
    return res
};