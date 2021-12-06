/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

let map = new Map();
let url = 'http://tinyurl.com/';

var encode = function(longUrl) {
	const random = Math.floor(Math.random() * 100000);
	map.set(random, longUrl);

	return url + random;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
	return map.get(Number(shortUrl.replace(url, '')));
};


/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
console.log(decode(encode('https://leetcode.com/problems/design-tinyurl')));