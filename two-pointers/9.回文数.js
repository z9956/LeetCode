/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	if (x === 0) return true;
	if (x < 0 || x % 10 === 0) return false;

	let num = 0;
	while (x > num) {
		num = num * 10 + (x % 10);
		x = Math.floor(x / 10);
	}

	return num === x || x === Math.floor(num / 10);
};

//简单粗暴
var isPalindrome2 = function (x) {
	const reverseResult = +String(x).split('').reverse().join('');

	return x === reverseResult;
};

console.log(isPalindrome(12321));
