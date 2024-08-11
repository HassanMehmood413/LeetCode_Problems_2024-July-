/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0
    for(let i = 0;i<=hours.length-1;i++){
        if(hours[i]>=target){
            count++
        }
    }
    return count
};