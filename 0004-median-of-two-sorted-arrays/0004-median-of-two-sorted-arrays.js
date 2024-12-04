/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (a, b) {
    let n1 = a.length, n2 = b.length;
    // if n1 is bigger swap the arrays:
    if (n1 > n2) return findMedianSortedArrays(b, a);

    let n = n1 + n2; // total length # 3
    let left = Math.floor((n1 + n2 + 1) / 2); // length of left half # 2
    // apply binary search:
    let low = 0, high = n1;
    while (low <= high) {
        let mid1 = Math.floor((low + high) / 2); // # 1
        let mid2 = left - mid1; // # 2-1 = 1
        // calculate l1, l2, r1, and r2
        let l1 = Number.MIN_SAFE_INTEGER, l2 = Number.MIN_SAFE_INTEGER;
        let r1 = Number.MAX_SAFE_INTEGER, r2 = Number.MAX_SAFE_INTEGER;
        if (mid1 < n1) r1 = a[mid1];
        if (mid2 < n2) r2 = b[mid2];
        if (mid1 - 1 >= 0) l1 = a[mid1 - 1];
        if (mid2 - 1 >= 0) l2 = b[mid2 - 1];

        if (l1 <= r2 && l2 <= r1) {
            if (n % 2 === 1) return Math.max(l1, l2);
            else return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
        }

        // eliminate the halves:
        else if (l1 > r2) high = mid1 - 1;
        else low = mid1 + 1;
    }
    return 0; // dummy statement
};