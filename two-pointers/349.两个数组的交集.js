/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let results = [];
  let i = 0;
  let j = 0;
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  console.log(nums1, nums2)

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      const len = results.length;

      if (!len || results[len - 1] !== nums1[i]) {
        results.push(nums1[i]);
      }
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    }
  }
  return results;
};
/**
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 * */

