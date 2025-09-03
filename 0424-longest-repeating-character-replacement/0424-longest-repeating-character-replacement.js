/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    // current length - most repeated current number 
    let most = 0;
    let ans = 0;
    let left = 0;
    let freq = new Map();

    for (let right = 0; right < s.length; right++) {
        let ch = s[right];

        let newCount = (freq.get(ch) || 0) + 1;
        freq.set(ch, newCount);

        most = Math.max(most, newCount);

        while ((right - left + 1) - most > k) {
            let leftCh = s[left++];
            let leftCount = (freq.get(leftCh) || 0) - 1;
            if (leftCount > 0) freq.set(leftCh, leftCount);
            else freq.delete(leftCh);
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};