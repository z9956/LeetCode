/**
 * @param {string[]} strs
 * @return {string}
 */
//暴力解
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  if (strs.length === 1) return strs[0];

  let result = "";
  let len;
  len = strs.map((val) => val.length);
  len = Math.max.apply(null, len);

  if (len === 0) return "";
  for (let i = 0; i < len; i++) {
    let str = "";
    for (let j = 0; j < strs.length; j++) {
      if (j === 0 && strs[j][i]) {
        str = strs[j][i];
        j++;
      }

      if (strs[j][i] !== str) {
        return result;
      } else if (strs[strs.length - 1][i] === str && strs.length - 1 === j) {
        result += strs[j][i];
      }
    }
  }
  return result;
};
