/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const len = nums.length;

  const list = new Array(len).fill(0).map(() => new Array(2).fill(0));

  for (let i = 0; i < len; i++) {
    list[i][0] = nums[i];
    list[i][1] = i;
  }

  list.sort((a, b) => a[0] - b[0]);

  const results = new Array(len);
  let prev = -1;
  for (let i = 0; i < len; i++) {
    if (prev === -1 || list[i][0] !== list[i - 1][0]) {
      prev = i;
    }

    results[list[i][1]] = prev;
  }

  return results;
};

// var smallerNumbersThanCurrent = function(nums) {
// 	let res = [];
//
// 	for (let i = 0; i < nums.length; i++) {
// 		let count = 0;
// 		for (let j = 0; j < nums.length; j++) {
// 			if (nums[i] > nums[j]) {
// 				count++;
// 			}
// 		}
// 		res.push(count);
// 	}
// 	return res;
// };

/*
* 输入：nums = [8,1,2,2,3]
输出：[4,0,1,1,3]
解释：
对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。
对于 nums[1]=1 不存在比它小的数字。
对于 nums[2]=2 存在一个比它小的数字：（1）。
对于 nums[3]=2 存在一个比它小的数字：（1）。
对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。
* */

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
