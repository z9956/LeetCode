/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
	let i = 97;

	const map = new Map();

	for (const char of key) {
		if (!map.has(char) && char !== ' ') {
			map.set(char, String.fromCharCode(i));
			i++;
		}
	}

	let res = '';
	for (const char of message) {
		if (map.has(char)) {
			res += map.get(char);
		} else {
			res += ' ';
		}
	}

	return res;
};

console.log(decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv')); //this is a secret
