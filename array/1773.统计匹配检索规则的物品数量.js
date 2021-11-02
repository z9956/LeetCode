/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
	let count = 0;
	const map = {
		type: 0,
		color: 1,
		name: 2,
	};

	for (let i = 0; i < items.length; i++) {
		const item = items[i];

		if (item[map[ruleKey]] === ruleValue) {
			count++;
		}
	}

	return count;
};

console.log(
	countMatches(
		[
			['phone', 'blue', 'pixel'],
			['computer', 'silver', 'lenovo'],
			['phone', 'gold', 'iphone'],
		],
		'color',
		'silver',
	),
);
