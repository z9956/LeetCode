/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  let i = m - 1;
  let j = n - 1;
  let len = m + n - 1;

  while (i >= 0 || j >= 0) {
    if (j === -1 || A[i] > B[j]) {
      A[len] = A[i];
      i--;
    } else {
      A[len] = B[j];
      j--;
    }
    len--;
  }
};

/*
输入:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
*/
