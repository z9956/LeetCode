/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
	let max = 0;

	for (const sentence of sentences) {
		const words = sentence.split(' ');
		max = Math.max(max, words.length);
	}

	return max;
};

console.log(
	mostWordsFound([
		'alice and bob love leetcode',
		'i think so too',
		'this is great thanks very much',
	]),
);
