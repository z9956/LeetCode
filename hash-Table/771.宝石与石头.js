/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
	let count = 0;
	const set = new Set(jewels.split(''));

	for (let i = 0; i < stones.length; i++) {
		if (set.has(stones[i])) {
			count++;
		}
	}

	return count;
};

/*
 * 输入：jewels = "aA", stones = "aAAbbbb"
 * 输出：3
 * */

console.log(numJewelsInStones('aA', 'aAAbbbb'));
