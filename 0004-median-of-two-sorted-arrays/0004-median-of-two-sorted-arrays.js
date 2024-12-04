/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    //Step1: Check that nums1.length<nums2.length or not .if not then do swap the arrays
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let m = nums1.length;
    let n = nums2.length;

    let start = 0;
    let end = m;

    while (start <= end) {

        //Step2: Check the partitions 
        const partition1 = Math.floor((start + end) / 2);
        const partition2 = Math.floor((n + m + 1) / 2) - partition1;

        //Step3: Determine the min and max value 
        let maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        let minRight1 = partition1 === m ? Infinity : nums1[partition1];

        let maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        let minRight2 = partition2 === n ? Infinity : nums2[partition2];

        //Step3: Check that partitions are right or not
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            //check that n+m length is odd or even 
            if ((n + m) % 2 === 1) {
                return Math.max(maxLeft1, maxLeft2);
            } else {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2.0;
            }
        }

        //Step4: Adjust the partitions
        if (maxLeft1 > minRight2) {
            end = partition1 - 1;
        } else {
            start = partition1 + 1;
        }


    }
}