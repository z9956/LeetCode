/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
	const len = words.length;
	const obj = {};
	let res = [];
	for (let i = 0; i < 26; i++) {
		obj[String.fromCharCode(97 + i)] = new Array(len).fill(0);
	}

	for (let i = 0; i < len; i++) {
		for (let char of words[i]) {
			obj[char][i]++;
		}
	}

	for (let char in obj) {
		let count = Math.min(...obj[char]);
		while (count--) res.push(char);
	}
	return res;
};
// var commonChars = function(words) {
// 	const first = words[0];
//
// 	const results = [];
//
// 	for (const cur of first) {
// 		if(words.every(word => word.includes(cur))) {
// 			words = words.map(word => word.replace(cur, ''));
// 			results.push(cur);
// 		}
// 	}
//
// 	return results;
// };
console.log(commonChars(['bella', 'label', 'roller'])); //["e","l","l"]
console.log(commonChars(['cool', 'lock', 'cook']));
