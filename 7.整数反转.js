/**
 * @param {number} x
 * @return {number}
 */

//通过取余反转数字结果，判断反转后是否超过32位的范围 2147483647 -2147483648
var reverse = function (x) {
  let result = 0;
  let isSign;

  isSign = x > 0 ? "" : "-";
  x = x > 0 ? x : Math.abs(x);

  while (x !== 0) {
    result = result * 10 + (x % 10);
    if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) {
      return 0;
    }
    x = Math.floor(x / 10);
  }

  return isSign + result;
};
