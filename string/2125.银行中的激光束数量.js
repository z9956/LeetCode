/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
	let res = 0;
	let pre = 0;
	let cur = 0;

	for (let i = 0; i < bank.length; i++) {
		const current = bank[i];

		cur = 0;
		for (let j = 0; j < current.length; j++) {
			if (current[j] === '1') cur++;
		}

		if (cur === 0) continue;

		if (pre) res += pre * cur;

		pre = cur;
	}

	return res;
};

console.log(numberOfBeams(['011001', '000000', '010100', '001000']));
