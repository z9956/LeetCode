/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
	let map = new Set(allowed.split(''));
	let count = 0;

	while (words.length) {
		let word = words.shift();
		let flag = true;

		for (let i = 0; i < word.length; i++) {
			if (!map.has(word[i])) {
				flag = false;
				break;
			}
		}

		if (flag) {
			count++;
		}
	}

	return count;
};
/*
输入：allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
输出：2
解释：字符串 "aaab" 和 "baa" 都是一致字符串，因为它们只包含字符 'a' 和 'b'
 */
console.log(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab']));
