/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
	return s.substring(n) + s.substring(0, n);
};

/*var reverseLeftWords = function(s, n) {
	let i = 0;
	let res = [...s];

	while (i<n) {
		res.push(res.shift());
		i++;
	}
	return res.join('');
};*/
