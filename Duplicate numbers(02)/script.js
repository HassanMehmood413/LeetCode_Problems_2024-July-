// // let nums = [0]
// // var j = 0
// //     if (nums.length < 2) {
// //         console.log('false')
// //     }
// //     else {

// //         for (let i = 0; i < nums.length; i++) {
// //             for (let j = i + 1; j < nums.length; j++) {
// //                 if (nums[i] == nums[j]) {
// //                     console.log('true')
// //                 }
// //             }
// //             if (nums[i] != nums[j]) {
// //                 console.log('false')
// //             }
// //         }

// //     }

// //This cause time complexity because of nested loop 
// //so it cannot run on bigger input
// let nums = [1,2,3,4,5,4]
// var i, j;
// if (nums.length == 1) {
//     console.log('false')
// }
// else {
//     for (i=0 ; i < nums.length;) {
//         for (var j = 1; j < i.length; j++) {
//             if (nums[i] == nums[j] && i!=j) {
//                 console.log('true')
//             }
//         }
//         i++;
//     }
//     if('true'){
//         console.log('false')
//     }
// }



// var containsDuplicate = function (nums) {
//     if (nums.length <= 1) {
//         return false;
//     }

//     // Create a Set to store encountered elements
//     let set = new Set();

//     // Iterate through the array
//     for (let i = 0; i < nums.length; i++) {
//         // If the element is already in the Set, return true (contains duplicate)
//         if (set.has(nums[i])) {
//             return true;
//         }
//         // Otherwise, add the element to the Set
//         set.add(nums[i]);
//     }

//     // If no duplicates were found, return false
//     return false;
// } 

// let hs = function (nums) {

//     if (nums.length <= 1) {
//         console.log('false')
//     }
//     for (let i = 0; i < nums.lenght - 1; i++) {
//         if (nums[i] == nums[i + 1]) {
//             console.log('true')
//         }
//     }
//     return false
// }
// hs([1,2,3,3,4])



var containsDuplicate = function(nums) {
    // Check if the array has only one element
    if (nums.length <= 1) {
        return false; // If there's only one element, it can't have duplicates
    }
    
    // Sort the array (optional but helps in optimization)
    nums.sort();
    
    // Iterate through the array
    for (let i = 0; i <= nums.length - 1; i++) {
        // Check if the current element is equal to the next element
        if (nums[i] === nums[i + 1]) {
            return true; // If duplicate found, return true
        }
    }
    
    // If no duplicates were found, return false
    return false;
};