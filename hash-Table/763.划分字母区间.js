/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
	const map = new Map();
	for (let i = 0; i < s.length; i++) {
		map.set(s[i], i);
	}

	const res = [];
	let start = 0;
	let end = 0;

	console.log(map);
	for (let i = 0; i < s.length; i++) {
		const max = map.get(s[i]);
		end = Math.max(end, max);

		if (i === end) {
			res.push(end - start + 1);
			start = end + 1;
		}
	}

	return res;
};
console.log(partitionLabels('ababcbacadefegdehijhklij'));