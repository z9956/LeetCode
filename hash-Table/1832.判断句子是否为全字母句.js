/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
	const set = new Set();
	for (let i = 0; i < sentence.length; i++) {
		const char = sentence[i];
		set.add(char.toLowerCase());
	}
	return set.size === 26;
};
console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));
