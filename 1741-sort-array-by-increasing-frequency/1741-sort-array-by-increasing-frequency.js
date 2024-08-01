/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    nums.sort((a,b)=>b-a)
    const frequencyMap = new Map();
    nums.forEach(element => {
        frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
    });

    // Step 2: Convert the frequency map to an array of [element, frequency] pairs
    const frequencyEntries = Array.from(frequencyMap.entries());

    // Step 3: Sort the array by frequency (in ascending order)
    const sortedByFrequency = frequencyEntries.sort((a, b) => a[1] - b[1]);

    // Step 4: Create a new array sorted by frequency
    const result = [];
    sortedByFrequency.forEach(([element, frequency]) => {
        for (let i = 0; i < frequency; i++) {
            result.push(element);
        }
    });
    return result

};