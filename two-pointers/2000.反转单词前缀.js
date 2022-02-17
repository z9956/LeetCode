/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
	const index = word.indexOf(ch);

	if (index > -1) {
		let left = 0;
		let right = index;
		let chars = [...word];

		while (left < right) {
			let temp = chars[left];
			chars[left] = chars[right];
			chars[right] = temp;
			left++;
			right--;
		}

		return chars.join('');
	}

	return word;
};

// var reversePrefix = function(word, ch) {
// 	let i = 0;
// 	let len = word.length;
//
// 	const index = word.indexOf(ch);
//
// 	if (index > -1) {
// 		i = index + 1;
// 		let chars = word
// 			.substring(0, i)
// 			.split('')
// 			.reverse()
// 			.join('');
// 		let end = word.substring(i, len);
//
// 		return chars + end;
// 	}
//
// 	return word;
// };

// 输入：word = "abcdefd", ch = "d"
//输出："dcbaefd"
console.log(reversePrefix('abcdefd', 'd'));
