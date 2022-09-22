/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	let add = 0;
	let sum = [];
	for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
		let num1 = +a[i] || 0;
		let num2 = +b[j] || 0;
		sum.unshift((num1 + num2 + add) % 2);
		add = num1 + num2 + add > 1 ? 1 : 0;
	}
	if (add === 1) sum.unshift(1);
	return sum.join('');
};

/*
* 输入:a = "11", b = "1"
输出："100"
示例 2：

输入：a = "1010", b = "1011"
输出："10101"
*
*
* 测试用例:"1111", "1111"
	期望结果:"11110"
* */
