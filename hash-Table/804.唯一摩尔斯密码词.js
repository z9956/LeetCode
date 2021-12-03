/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
	const morse = [
		'.-',
		'-...',
		'-.-.',
		'-..',
		'.',
		'..-.',
		'--.',
		'....',
		'..',
		'.---',
		'-.-',
		'.-..',
		'--',
		'-.',
		'---',
		'.--.',
		'--.-',
		'.-.',
		'...',
		'-',
		'..-',
		'...-',
		'.--',
		'-..-',
		'-.--',
		'--..',
	];

	const set = new Set();

	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		let morseWord = '';
		for (let j = 0; j < word.length; j++) {
			morseWord += morse[word.charCodeAt(j) - 97];
		}
		set.add(morseWord);
	}

	return set.size;
};
console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']));
