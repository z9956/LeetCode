/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
	const results = [];

	const dfs = (index, path) => {
		if (index === s.length) return results.push(path);

		const char = s[index];
		// if (char.match(/[a-zA-Z]/)) {
		if (isNaN(char)) {
			dfs(index + 1, path + char.toUpperCase());
			dfs(index + 1, path + char.toLowerCase());
		} else {
			dfs(index + 1, path + char);
		}
	};

	dfs(0, '');

	return results;
};

// var letterCasePermutation = function (s) {
// 	const results = [];
//
// 	if (!s.match(/.*[a-zA-Z].*/)) return [s];
//
// 	dfs(0, s);
//
// 	function dfs(index, path) {
// 		if (index === s.length) return results.push(path);
//
// 		const char = s[index];
//
// 		if (char.match(/[a-zA-Z]/)) {
// 			dfs(index + 1, path.substring(0, index) + char.toUpperCase() + path.substring(index + 1));
// 			dfs(index + 1, path.substring(0, index) + char.toLowerCase() + path.substring(index + 1));
// 		} else {
// 			dfs(index + 1, path);
// 		}
// 	}
//
// 	return results;
// };

/*
 * 输入：S = "a1b2"
 * 输出：["a1b2", "a1B2", "A1b2", "A1B2"]
 * */

// console.log(letterCasePermutation('a1b2'));
console.log(letterCasePermutation2('a1b2'));
// console.log(letterCasePermutation('3z4'));
// console.log(letterCasePermutation('C'));
// console.log(letterCasePermutation('qwerasdfzxcv'));
