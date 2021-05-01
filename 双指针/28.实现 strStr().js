/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle || haystack === needle) return 0;
  if (haystack.length < needle.length) return -1;

  let i = 0;
  let j = 0;
  let index = -1;

  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      if (index === -1) index = i;

      if (j === needle.length - 1) return index;

      j++;
    } else {
      if (index !== -1) {
        i = index;
        index = -1;
        j = 0;
      }
    }

    i++;
  }

  return -1;
};

/**
 * 输入：haystack = "hello", needle = "ll"
 * 输出：2
 *
 * 输入：haystack = "aaaaa", needle = "bba"
 * 输出：-1
 *
 * 输入：haystack = "", needle = ""
 * 输出：0
 *
 * 输入：haystack = "mississippi", needle = "issi"
 * 输出： 1
 * */

