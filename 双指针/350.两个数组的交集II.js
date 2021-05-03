/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let results = [];
  let i = 0;
  let j = 0;
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      results.push(nums1[i]);
      i++;
      j++;
    } else {
      nums1[i] > nums2[j] ? j++ : i++;
    }
  }
  return results;
};

/*
* 输入：nums1 = [1,2,2,1], nums2 = [2,2]
* 输出：[2,2]

* 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
* 输出：[4,9]
*
* [2,1]
* [1,2]
* */
