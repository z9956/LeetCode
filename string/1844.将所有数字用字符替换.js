/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
	let results = s.split('');
	let i = 1;

	while (i < results.length) {
		results[i] = String.fromCharCode(results[i - 1].charCodeAt(0) + Number(results[i]));
		i += 2;
	}

	return results.join('');
};

console.log(replaceDigits('a1c1e1')); //abcdef
