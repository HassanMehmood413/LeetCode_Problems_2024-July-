/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let map = {}
    for (let i = 0; i < numCourses; i++) {
        map[i] = []
    }
    for (const [crs,pre] of prerequisites) {
        map[crs].push(pre)
    }

    //Visite SEt
    let visit = new Set()
    var again = function (crs) {
        if (visit.has(crs)) return false

        // checking map 
        if (map[crs].length == 0) return true
        visit.add(crs)
        //Now check every prerequisites using loop
        for (const pre of map[crs]) {
            if (!again(pre)) return false
        }
        visit.delete(crs)
        map[crs] = []
        return true
    }
    // now the condition is if every courses has no prerequisites then ?
    for (let crs = 0; crs < numCourses ; crs++) {
        if (!again(crs)) return false
    } return true

};