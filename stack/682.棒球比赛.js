/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
	let res = [];

	for (let i = 0; i < ops.length; i++) {
		switch (ops[i]) {
			case 'C':
				res.pop();
				break;
			case 'D':
				res.push(+res.at(-1) * 2);
				break;
			case '+':
				res.push(+res.at(-1) + +res.at(-2));
				break;
			default:
				res.push(+ops[i]);
		}
	}

	return res.length ? res.reduce((i, j) => i + j) : 0;
};
