/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	if (!digits.length) return [];

	let results = [];
	let map = new Map([
		['0', ''],
		['1', ''],
		['2', 'abc'],
		['3', 'def'],
		['4', 'ghi'],
		['5', 'jkl'],
		['6', 'mno'],
		['7', 'pqrs'],
		['8', 'tuv'],
		['9', 'wxyz'],
	]);

	dfs('', 0);

	function dfs(str, i) {
		if (i > digits.length - 1) return results.push(str);

		let letters = map.get(digits[i]);

		for (const letter of letters) {
			dfs(str + letter, i + 1);
		}
	}

	return results;
};

// var letterCombinations = function (digits) {
// 	if (!digits.length) return [];
//
// 	let map = new Map([
// 		['0', ''],
// 		['1', ''],
// 		['2', 'abc'],
// 		['3', 'def'],
// 		['4', 'ghi'],
// 		['5', 'jkl'],
// 		['6', 'mno'],
// 		['7', 'pqrs'],
// 		['8', 'tuv'],
// 		['9', 'wxyz'],
// 	]);
//
// 	let results = [];
//
// 	dfs('', digits);
//
// 	function dfs(str, digit) {
// 		if (!digit.length) {
// 			results.push(str);
// 		}
//
// 		let letters = map.get(digit[0]);
//
// 		for (const key in letters) {
// 			str += letters[key];
// 			dfs(str, digit.slice(1));
// 			str = str.slice(0, -1);
// 		}
// 	}
//
// 	return results;
// };

/*
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * */
console.log(letterCombinations('23'));
